import * as React from 'react'
import classNames from 'classnames'
import { useComponentConfig } from '../config-provider/context'
// import useStyle from './style'

export interface DividerProps {
    prefixCls?: string
    type?: 'horizontal' | 'vertical'
    /**
     * @default center
     */
    orientation?: 'left' | 'right' | 'center' | 'start' | 'end'
    orientationMargin?: string | number
    className?: string
    rootClassName?: string
    children?: React.ReactNode
    dashed?: boolean
    variant?: 'dashed' | 'dotted' | 'solid'
    style?: React.CSSProperties
    plain?: boolean
}

const Divider: React.FC<DividerProps> = props => {
    const { getPrefixCls, direction, className: dividerClassName, style: dividerStyle } = useComponentConfig('divider')
    const {
        prefixCls: customizePrefixCls,
        type = 'horizontal',
        orientation = 'center',
        orientationMargin,
        className,
        rootClassName,
        children,
        dashed,
        variant = 'solid',
        plain,
        style,
        ...restProps
    } = props

    const hasChildren = !!children

    const prefixCls = getPrefixCls('divider', customizePrefixCls)

    const mergedOrientation = React.useMemo<'start' | 'end' | 'center'>(() => {
        if (orientation === 'left') {
            return direction === 'rtl' ? 'end' : 'start'
        }
        if (orientation === 'right') {
            return direction === 'rtl' ? 'start' : 'end'
        }
        return orientation
    }, [direction, orientation])

    const hasMarginStart = mergedOrientation === 'start' && orientationMargin != null

    const hasMarginEnd = mergedOrientation === 'end' && orientationMargin != null

    const classString = classNames(
        prefixCls,
        dividerClassName,
        `${prefixCls}-${type}`,
        {
            [`${prefixCls}-with-text`]: hasChildren,
            [`${prefixCls}-with-text-${mergedOrientation}`]: hasChildren,
            [`${prefixCls}-dashed`]: !!dashed,
            [`${prefixCls}-${variant}`]: variant !== 'solid',
            [`${prefixCls}-plain`]: !!plain,
            [`${prefixCls}-rtl`]: direction === 'rtl',
            [`${prefixCls}-no-default-orientation-margin-start`]: hasMarginStart,
            [`${prefixCls}-no-default-orientation-margin-end`]: hasMarginEnd
        },
        className,
        rootClassName
    )

    const memoizedOrientationMargin = React.useMemo<string | number>(() => {
        if (typeof orientationMargin === 'number') {
            return orientationMargin
        }
        if (/^\d+$/.test(orientationMargin!)) {
            return Number(orientationMargin)
        }
        return orientationMargin!
    }, [orientationMargin])

    const innerStyle: React.CSSProperties = {
        marginInlineStart: hasMarginStart ? memoizedOrientationMargin : undefined,
        marginInlineEnd: hasMarginEnd ? memoizedOrientationMargin : undefined
    }

    return (
        <div className={classString} style={{ ...dividerStyle, ...style }} {...restProps} role="separator">
            {children && type !== 'vertical' && (
                <span className={`${prefixCls}-inner-text`} style={innerStyle}>
                    {children}
                </span>
            )}
        </div>
    )
}

Divider.displayName = 'Divider'

export default Divider
