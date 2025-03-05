import * as React from 'react'
// import classNames from 'classnames'
// import { warning } from '../_utils'
// import { useComponentConfig } from '../config-provider/context'
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
    // const { getPrefixCls, direction, className: dividerClassName, style: dividerStyle } = useComponentConfig('divider')
    // const {
    //     prefixCls: customizePrefixCls,
    //     type = 'horizontal',
    //     orientation = 'center',
    //     orientationMargin,
    //     className,
    //     rootClassName,
    //     children,
    //     dashed,
    //     variant = 'solid',
    //     plain,
    //     style,
    //     ...restProps
    // } = props

    // const prefixCls = getPrefixCls('divider', customizePrefixCls)
    // const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls)

    return <div>divider{props.dashed}</div>
}

export default Divider
