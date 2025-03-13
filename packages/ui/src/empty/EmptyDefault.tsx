import React from 'react'
import { componentsPops } from '../_types'

export interface EmptyDefaultProps extends componentsPops {
    width?: number
    style?: React.CSSProperties
    children?: React.ReactNode
}

const EmptyDefault: React.FC<EmptyDefaultProps> = props => {
    const { width = 127 } = props
    return (
        <svg
            t="1741847399288"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4844"
            width={width}
        >
            <path
                d="M855.8 814.2H386.3c-24.2 0-43.8-19.6-43.8-43.8V120c0-24.2 19.6-43.8 43.8-43.8H866c24.2 0 43.8 19.6 43.8 43.8v640.2c-0.1 29.8-24.2 54-54 54z"
                fill="#F2F7F7"
                p-id="4845"
            ></path>
            <path
                d="M640.6 945.9H223.8c-24.2 0-43.8-19.6-43.8-43.8V251.7c0-24.2 19.6-43.8 43.8-43.8h479.7c24.2 0 43.8 19.6 43.8 43.8v587.6c-0.1 58.9-47.8 106.6-106.7 106.6z"
                fill="#D3E0DC"
                p-id="4846"
            ></path>
            <path
                d="M544.2 839.9v-72.1H60v60.4c0 65 52.7 117.7 117.7 117.7h472.5c-58.6 0-106-47.5-106-106z"
                fill="#B6CEC9"
                p-id="4847"
            ></path>
            <path
                d="M641.4 391.3H280.2c-17 0-30.8-13.8-30.8-30.8s13.8-30.8 30.8-30.8h361.2c17 0 30.8 13.8 30.8 30.8 0 17.1-13.8 30.8-30.8 30.8zM631.7 545.3H270.5c-17 0-30.8-13.8-30.8-30.8s13.8-30.8 30.8-30.8h361.2c17 0 30.8 13.8 30.8 30.8s-13.8 30.8-30.8 30.8zM410.7 711.3H270.5c-17 0-30.8-13.8-30.8-30.8s13.8-30.8 30.8-30.8h140.2c17 0 30.8 13.8 30.8 30.8-0.1 17-13.8 30.8-30.8 30.8z"
                fill="#F7F9F9"
                p-id="4848"
            ></path>
        </svg>
    )
}

export default EmptyDefault
