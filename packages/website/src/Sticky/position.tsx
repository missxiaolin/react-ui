import React from 'react'
import { Sticky } from '@l/ui'

const App: React.FC = () => {
    return (
        <Sticky position="bottom" offset={50}>
            <button>Offset top 20px</button>
        </Sticky>
    )
}

export default App
