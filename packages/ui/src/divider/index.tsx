import * as React from 'react'
import classNames from 'classnames'
import { useComponentConfig } from '../config-provider/context'
import * as SC from './style'

export interface DividerProps {
    prefixCls?: string
    type?: 'horizontal' | 'vertical'
    /**
     * @default center
     */
    orientation?: 'left' | 'right' | 'center'
    dashed?: boolean
    className?: string
    rootClassName?: string
    children?: React.ReactNode
    variant?: 'dashed' | 'dotted' | 'solid'
    style?: React.CSSProperties
}

const Divider: React.FC<DividerProps> = props => {
    const { getPrefixCls, className: dividerClassName, style: dividerStyle } = useComponentConfig('divider')

    const {
        prefixCls: customizePrefixCls,
        type = 'horizontal',
        orientation = 'center',
        className,
        rootClassName,
        children,
        variant = 'solid',
        dashed,
        style,
        ...restProps
    } = props

    const prefixCls = getPrefixCls('divider', customizePrefixCls)

    const classString = classNames(
        prefixCls,
        dividerClassName,
        `${prefixCls}-${type}`,
        {
            [`${prefixCls}-${variant}`]: variant !== 'solid',
            [`${prefixCls}-dashed`]: !!dashed
        },
        className,
        rootClassName
    )

    const spanClassName = classNames(`${prefixCls}-inner-text`, `${prefixCls}-inner-text-${orientation}`)

    return (
        <SC.DividerStyle className={classString} style={{ ...dividerStyle, ...style }} {...restProps} {...props} role="separator">
            {children && type !== 'vertical' && <span className={spanClassName}>{children}</span>}
        </SC.DividerStyle>
    )
}

Divider.displayName = 'Divider'

export default Divider
