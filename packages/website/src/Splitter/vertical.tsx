import React from 'react'
import { Splitter, Flex } from '@l/ui'

const Desc: React.FC<Readonly<{ text?: string | number }>> = props => (
    <Flex justify="center" align="center" style={{ height: '100%' }}>
        {props.text}
    </Flex>
)

const AppDivider: React.FC = () => {
    return (
        <Splitter style={{ height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} layout="vertical">
            <Splitter.Panel defaultSize="40%" min="20%" max="70%">
                <Desc text="First" />
            </Splitter.Panel>
            <Splitter.Panel>
                <Desc text="Second" />
            </Splitter.Panel>
        </Splitter>
    )
}

export default AppDivider
