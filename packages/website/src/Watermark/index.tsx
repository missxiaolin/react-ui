import React from 'react'
import { Watermark } from '@l/ui'

const App: React.FC = () => {
    return (
        <div
            style={{
                width: '100%',
                height: '300px',
                display: 'block',
                background: '#fff',
                position: 'relative'
            }}
        >
            <Watermark fullPage={false} font-color="#fa2c19" content="l-ui" />
        </div>
    )
}

export default App
