import React from 'react'
import { Sticky } from '@l/ui'

const App: React.FC = () => {
    return (
        <Sticky offset={120}>
            <button>Offset top 120px</button>
        </Sticky>
    )
}

export default App
