import * as React from 'react'
import classNames from 'classnames'
import { useComponentConfig } from '../config-provider/context'
import * as SC from './style'
import { isNumber, isString } from '../_utils'

export interface HeaderProps {
    height?: string | number
    style?: React.CSSProperties
    children?: React.ReactNode
}

const Header: React.FC<HeaderProps> = props => {
    const { getPrefixCls } = useComponentConfig('header')
    const { height, style, children } = props

    const prefix = getPrefixCls('header')

    const cls = classNames(prefix)
    const colStyles: React.CSSProperties = {}
    if (isNumber(height)) {
        colStyles.height = `${height}px`
    }
    if (isString(height)) {
        colStyles.height = height
    }

    return (
        <SC.HeaderStyle className={cls} style={{ ...colStyles, ...style }}>
            {children}
        </SC.HeaderStyle>
    )
}

Header.displayName = 'Header'

export default Header
