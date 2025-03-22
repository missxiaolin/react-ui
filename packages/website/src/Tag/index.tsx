import React from 'react'
import { Tag } from '@l/ui'

const App: React.FC = () => {
    return (
        <div>
            <Tag>Tag 1</Tag>
            <Tag type={'success'}>Tag 2</Tag>
            <Tag type={'warning'}>Tag 3</Tag>
            <Tag type={'info'}>Tag 4</Tag>
            <Tag type={'danger'}>Tag 5</Tag>
        </div>
    )
}

export default App
