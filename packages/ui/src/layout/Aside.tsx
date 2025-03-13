import * as React from 'react'
import classNames from 'classnames'
import { useComponentConfig } from '../config-provider/context'
import * as SC from './style'
import { isNumber, isString } from '../_utils'
import { componentsPops } from '../_types'

export interface AsideProps extends componentsPops {
    width?: string | number
    style?: React.CSSProperties
    children?: React.ReactNode
}

const Aside: React.FC<AsideProps> = props => {
    const { getPrefixCls } = useComponentConfig('aside')
    const { width = 200, style, children, className } = props

    const prefix = getPrefixCls('aside')

    const cls = classNames(prefix, className)
    const colStyles: React.CSSProperties = {}
    if (isNumber(width)) {
        colStyles.width = `${width}px`
    }
    if (isString(width)) {
        colStyles.width = width
    }

    return (
        <SC.AsideStyle className={cls} style={{ ...style, ...colStyles }}>
            {children}
        </SC.AsideStyle>
    )
}

Aside.displayName = 'Aside'

export default Aside
