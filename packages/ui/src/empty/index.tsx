import React from 'react'
import classNames from 'classnames'
import { useComponentConfig } from '../config-provider/context'
import * as SC from './style'
import EmptyDefault from './EmptyDefault'
import { componentsPops } from '../_types'

export interface EmptyProps extends componentsPops {
    image?: string
    description?: string
    style?: React.CSSProperties
    children?: React.ReactNode
}

const Empty: React.FC<EmptyProps> = props => {
    const { getPrefixCls } = useComponentConfig('public')
    const { style, className, image = '', description = '暂无数据', children } = props

    const prefixCls = getPrefixCls('empty')

    const cls = classNames(prefixCls, className)

    return (
        <SC.EmptyStyle className={cls} style={{ ...style }}>
            <div className={`${prefixCls}__image`}>{image ? <img src={image} alt="" /> : <EmptyDefault />}</div>
            <div className={`${prefixCls}__description`}>{description ? <p>{description}</p> : ''}</div>
            <div className={`${prefixCls}__bottom`}>{children}</div>
        </SC.EmptyStyle>
    )
}

Empty.displayName = 'Empty'

export default Empty
