import * as React from 'react'
import classNames from 'classnames'
import { useComponentConfig } from '../config-provider/context'
import * as SC from './style'

export interface ContainerProps {
    direction?: string
    style?: React.CSSProperties
    children?: React.ReactNode
}

const Container: React.FC<ContainerProps> = props => {
    const { getPrefixCls } = useComponentConfig('container')

    const { children, style, direction = '' } = props

    const prefixCls = getPrefixCls('container', '')

    const isVertical = () => {
        if (direction === 'horizontal') {
            return false
        }
        if (direction === 'vertical' || children) {
            return true
        }

        return false
    }

    const classString = classNames(prefixCls, {
        'is-vertical': isVertical()
    })

    return (
        <SC.ContainerStyle className={classString} style={style}>
            {children}
        </SC.ContainerStyle>
    )
}

Container.displayName = 'Container'

export default Container
