import React from 'react'
import { Space } from '@l/ui'

const AppDivider: React.FC = () => {
    const baseStyle: React.CSSProperties = {
        width: 100,
        height: 30
    }
    return (
        <Space size={[8, 16]} wrap>
            {Array.from({ length: 20 }).map((_, index) => (
                <div key={index} style={{ ...baseStyle, backgroundColor: '#1677ffbf' }} />
            ))}
        </Space>
    )
}

export default AppDivider
