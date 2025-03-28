import React from 'react'

export interface UpOutlinedProps {
    className?: string
    style?: React.CSSProperties
    children?: React.ReactNode
}

const UpOutlined: React.FC<UpOutlinedProps> = props => {
    const { className } = props
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox="0 0 1024 1024"
            style={{
                width: '15px',
                color: '#ccc'
            }}
        >
            <path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" />
        </svg>
    )
}

export default UpOutlined
