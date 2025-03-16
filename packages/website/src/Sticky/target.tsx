import React from 'react'
import { Sticky } from '@l/ui'

const App: React.FC = () => {
    return (
        <div
            className="sticky-container"
            style={{
                textAlign: 'center',
                height: '400px',
                borderRadius: '4px',
                background: '#ccc'
            }}
        >
            <Sticky offset={80} target=".sticky-container">
                <button>Offset top 80px</button>
            </Sticky>
        </div>
    )
}

export default App
