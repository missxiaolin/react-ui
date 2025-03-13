import * as React from 'react'
import classNames from 'classnames'
import { useComponentConfig } from '../config-provider/context'
import { default as createFromIconFontCN } from '../icon/IconFont'
import * as SC from './style'
import { componentsPops } from '../_types'

const iconBaseUrl = '//at.alicdn.com/t/c/font_4054851_le4r49cthb.js'

export interface LinkProps extends componentsPops {
    type?: string
    disabled?: boolean
    href?: string
    icon?: string
    target?: string
    style?: React.CSSProperties
    iconUrl?: string
    children: React.ReactNode
    iconOrientation?: string
}

const Link: React.FC<LinkProps> = props => {
    const { getPrefixCls } = useComponentConfig('link')
    const {
        className,
        type = 'default',
        disabled = false,
        href = '',
        icon = '',
        target = '',
        iconUrl = '',
        iconOrientation = '',
        children,
        style
    } = props
    const prefixCls = getPrefixCls('link')

    const linkType = type || 'default'

    const cls = classNames(
        prefixCls,
        {
            'is-disabled': disabled,
            'is-underline': children && !icon,
            [`link--${linkType}`]: linkType,
            [`link--${iconOrientation}`]: iconOrientation
        },
        className
    )

    const Icon = createFromIconFontCN({
        // 在 iconFont.cn 上生成
        scriptUrl: iconUrl || iconBaseUrl
    })

    const iconNode = icon ? <Icon type={icon} /> : null

    return (
        <SC.LinkStyle className={cls} style={style} href={disabled || !href ? undefined : href} target={target}>
            {iconNode}
            {children}
        </SC.LinkStyle>
    )
}

Link.displayName = 'Link'

export default Link
