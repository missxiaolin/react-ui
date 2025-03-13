import * as React from 'react'
import classNames from 'classnames'
import { useComponentConfig } from '../config-provider/context'
import * as SC from './style'
import { componentsPops } from '../_types'

export interface MainProps extends componentsPops {
    style?: React.CSSProperties
    children?: React.ReactNode
}

const Main: React.FC<MainProps> = props => {
    const { getPrefixCls } = useComponentConfig('main')
    const { style, children, className } = props

    const prefix = getPrefixCls('main')

    const cls = classNames(prefix, className)

    return (
        <SC.MainStyle className={cls} style={style}>
            {children}
        </SC.MainStyle>
    )
}

Main.displayName = 'Main'

export default Main
