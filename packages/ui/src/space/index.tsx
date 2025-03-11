import * as React from 'react'
import classNames from 'classnames'
import toArray from 'rc-util/lib/Children/toArray'
import { SizeType } from '../config-provider/SizeContext'
import Compact from './Compact'
import { useComponentConfig } from '../config-provider/context'
import { isPresetSize } from '../flex/utils'
import { isValidGapNumber } from '../_utils/gapSize'
import { SpaceContextProvider, SpaceContextType } from './context'
import * as SC from './style'
import Item from './Item'

export type SpaceSize = SizeType | number

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string
    rootClassName?: string
    style?: React.CSSProperties
    size?: SpaceSize | [SpaceSize, SpaceSize]
    direction?: 'horizontal' | 'vertical'
    // No `stretch` since many components do not support that.
    align?: 'start' | 'end' | 'center' | 'baseline'
    split?: React.ReactNode
    wrap?: boolean
    classNames?: { item: string }
    styles?: { item: React.CSSProperties }
}

const InternalSpace = React.forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {
    const {
        getPrefixCls,
        size: contextSize,
        className: contextClassName,
        style: contextStyle,
        classNames: contextClassNames,
        styles: contextStyles
    } = useComponentConfig('space')

    const {
        size = contextSize ?? 'small',
        align,
        className,
        rootClassName,
        children,
        direction = 'horizontal',
        split,
        style,
        wrap = false,
        classNames: customClassNames,
        styles,
        ...otherProps
    } = props

    const prefixCls = getPrefixCls('space')

    const [horizontalSize, verticalSize] = Array.isArray(size) ? size : ([size, size] as const)

    const mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align
    const isPresetVerticalSize = isPresetSize(verticalSize)

    const isPresetHorizontalSize = isPresetSize(horizontalSize)

    const isValidHorizontalSize = isValidGapNumber(horizontalSize)

    const isValidVerticalSize = isValidGapNumber(verticalSize)

    const childNodes = toArray(children, { keepEmpty: true })

    const cls = classNames(
        prefixCls,
        contextClassName,
        `${prefixCls}-${direction}`,
        {
            [`${prefixCls}-align-${mergedAlign}`]: mergedAlign,
            [`${prefixCls}-gap-row-${verticalSize}`]: isPresetVerticalSize,
            [`${prefixCls}-gap-col-${horizontalSize}`]: isPresetHorizontalSize
        },
        className,
        rootClassName
    )

    const itemClassName = classNames(`${prefixCls}-item`, customClassNames?.item ?? contextClassNames.item)

    // Calculate latest one
    let latestIndex = 0
    const nodes = childNodes.map<React.ReactNode>((child, i) => {
        if (child !== null && child !== undefined) {
            latestIndex = i
        }

        const key = child?.key || `${itemClassName}-${i}`

        return (
            <Item className={itemClassName} key={key} index={i} split={split} style={styles?.item ?? contextStyles.item}>
                {child}
            </Item>
        )
    })

    const spaceContext = React.useMemo<SpaceContextType>(() => ({ latestIndex }), [latestIndex])

    // =========================== Render ===========================
    if (childNodes.length === 0) {
        return null
    }

    const gapStyle: React.CSSProperties = {}

    if (wrap) {
        gapStyle.flexWrap = 'wrap'
    }

    if (!isPresetHorizontalSize && isValidHorizontalSize) {
        gapStyle.columnGap = horizontalSize
    }

    if (!isPresetVerticalSize && isValidVerticalSize) {
        gapStyle.rowGap = verticalSize
    }

    return (
        <SC.SpaceStyle ref={ref} className={cls} style={{ ...gapStyle, ...contextStyle, ...style }}>
            <SpaceContextProvider value={spaceContext}>{nodes}</SpaceContextProvider>
        </SC.SpaceStyle>
    )
})

type CompoundedComponent = typeof InternalSpace & {
    Compact: typeof Compact
}

const Space = InternalSpace as CompoundedComponent

Space.displayName = 'Space'

export default Space
