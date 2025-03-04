import { SizeType } from '../config-provider/SizeContext'
import * as React from 'react'

export interface ButtonGroupProps {
    size?: SizeType
    style?: React.CSSProperties
    className?: string
    prefixCls?: string
    children?: React.ReactNode
}

export const GroupSizeContext = React.createContext<SizeType>(undefined)

const ButtonGroup: React.FC<ButtonGroupProps> = () => {
    return <></>
}

export default ButtonGroup
