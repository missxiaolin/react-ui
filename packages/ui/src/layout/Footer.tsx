import * as React from 'react'
import classNames from 'classnames'
import { useComponentConfig } from '../config-provider/context'
import * as SC from './style'
import { isNumber, isString } from '../_utils'
import { componentsPops } from '../_types'

export interface FooterProps extends componentsPops {
    height?: string | number
    style?: React.CSSProperties
    children?: React.ReactNode
}

const Footer: React.FC<FooterProps> = props => {
    const { getPrefixCls } = useComponentConfig('footer')
    const { height, style, children, className } = props

    const prefix = getPrefixCls('footer')

    const cls = classNames(prefix, className)
    const colStyles: React.CSSProperties = {}
    if (isNumber(height)) {
        colStyles.height = `${height}px`
    }
    if (isString(height)) {
        colStyles.height = height
    }

    return (
        <SC.FooterStyle className={cls} style={{ ...style, ...colStyles }}>
            {children}
        </SC.FooterStyle>
    )
}

Footer.displayName = 'Footer'

export default Footer
