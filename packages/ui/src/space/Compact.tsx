import * as React from 'react'
import { SizeType } from '../config-provider/SizeContext'
import { ConfigContext, defaultGetPrefixCls } from '../config-provider/context'
import useSize from '../config-provider/hooks/useSize'
import classNames from 'classnames'
import toArray from 'rc-util/lib/Children/toArray'
import * as SC from './style'

export interface SpaceCompactItemContextType {
    compactSize?: SizeType
    compactDirection?: 'horizontal' | 'vertical'
    isFirstItem?: boolean
    isLastItem?: boolean
}

export const SpaceCompactItemContext = React.createContext<SpaceCompactItemContextType | null>(null)

export interface SpaceCompactProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: SizeType
    direction?: 'horizontal' | 'vertical'
    block?: boolean
    rootClassName?: string
}

const CompactItem: React.FC<React.PropsWithChildren<SpaceCompactItemContextType>> = props => {
    const { children, ...others } = props
    return (
        <SpaceCompactItemContext.Provider value={React.useMemo<SpaceCompactItemContextType>(() => others, [others])}>
            {children}
        </SpaceCompactItemContext.Provider>
    )
}

const Compact: React.FC<SpaceCompactProps> = props => {
    const { getPrefixCls = defaultGetPrefixCls } = React.useContext(ConfigContext)

    const { size, direction, block, className, rootClassName, children, ...restProps } = props

    const mergedSize = useSize(ctx => size ?? ctx)

    const prefixCls = getPrefixCls('space-compact')

    const clx = classNames(
        prefixCls,
        {
            [`${prefixCls}-block`]: block,
            [`${prefixCls}-vertical`]: direction === 'vertical'
        },
        className,
        rootClassName
    )

    const compactItemContext = React.useContext(SpaceCompactItemContext) // 获取子组件的上下文

    const childNodes = toArray(children) // 遍历子组件

    const nodes = React.useMemo(
        () =>
            childNodes.map((child, i) => {
                const key = child?.key || `${prefixCls}-item-${i}`
                return (
                    <CompactItem
                        key={key}
                        compactSize={mergedSize}
                        compactDirection={direction}
                        isFirstItem={i === 0 && (!compactItemContext || compactItemContext?.isFirstItem)}
                        isLastItem={i === childNodes.length - 1 && (!compactItemContext || compactItemContext?.isLastItem)}
                    >
                        {child}
                    </CompactItem>
                )
            }),
        [size, childNodes, compactItemContext]
    )

    if (childNodes.length === 0) {
        return null
    }

    return (
        <SC.SpaceStyle className={clx} {...restProps}>
            {nodes}
        </SC.SpaceStyle>
    )
}

export default Compact
