import React from 'react'
import { Space } from '@l/ui'

const AppDivider: React.FC = () => {
    const baseStyle: React.CSSProperties = {
        width: 50,
        height: 30
    }
    return (
        <div
            style={{
                width: '50%',
                height: 100,
                flex: 'none',
                margin: '8px 4px',
                padding: '4px',
                border: '1px solid #40a9ff'
            }}
        >
            <Space align="center">
                center
                <div style={{ ...baseStyle, backgroundColor: '#1677ffbf' }} />
                <span className="mock-block">Block</span>
            </Space>
        </div>
    )
}

export default AppDivider
