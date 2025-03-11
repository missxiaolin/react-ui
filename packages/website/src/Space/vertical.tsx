import React from 'react'
import { Space } from '@l/ui'

const AppDivider: React.FC = () => {
    const baseStyle: React.CSSProperties = {
        width: 50,
        height: 30
    }
    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            Space
            {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} style={{ ...baseStyle, backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf' }} />
            ))}
        </Space>
    )
}

export default AppDivider
