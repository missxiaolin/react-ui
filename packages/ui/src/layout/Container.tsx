import * as React from 'react'
import classNames from 'classnames'
import { useComponentConfig } from '../config-provider/context'
import * as SC from './style'
import { componentsPops } from '../_types'

export interface ContainerProps extends componentsPops {
    direction?: string
    style?: React.CSSProperties
    children?: React.ReactNode
}

const Container: React.FC<ContainerProps> = props => {
    const { getPrefixCls } = useComponentConfig('container')

    const { children, style, direction = '', className } = props

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

    const classString = classNames(
        prefixCls,
        {
            'is-vertical': isVertical()
        },
        className
    )

    return (
        <SC.ContainerStyle className={classString} style={style}>
            {children}
        </SC.ContainerStyle>
    )
}

Container.displayName = 'Container'

export default Container
