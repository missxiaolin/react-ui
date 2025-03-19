import * as React from 'react'
import classNames from 'classnames'
import { useComponentConfig } from '../config-provider/context'
import * as SC from './style'
import { componentsPops } from '../_types'

export interface TagProps extends componentsPops {
    style?: React.CSSProperties
    children?: React.ReactNode
}

const Tag: React.FC<TagProps> = props => {
    const { getPrefixCls } = useComponentConfig('public')
    const { className, children, style } = props
    const prefixCls = getPrefixCls('tag')

    const cls = classNames(prefixCls, {}, className)

    return (
        <SC.TagStyle className={cls} style={style}>
            {children}
        </SC.TagStyle>
    )
}

Tag.displayName = 'Tag'

export default Tag
