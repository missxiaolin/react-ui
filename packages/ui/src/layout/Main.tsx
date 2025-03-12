import * as React from 'react'
import classNames from 'classnames'
import { useComponentConfig } from '../config-provider/context'
import * as SC from './style'

export interface MainProps {
    style?: React.CSSProperties
    children?: React.ReactNode
}

const Main: React.FC<MainProps> = props => {
    const { getPrefixCls } = useComponentConfig('main')
    const { style, children } = props

    const prefix = getPrefixCls('main')

    const cls = classNames(prefix)

    return (
        <SC.MainStyle className={cls} style={style}>
            {children}
        </SC.MainStyle>
    )
}

Main.displayName = 'Main'

export default Main
