import React from 'react'
import { Splitter, Flex } from '@l/ui'

const Desc: React.FC<Readonly<{ text?: string | number }>> = props => (
    <Flex justify="center" align="center" style={{ height: '100%' }}>
        {props.text}
    </Flex>
)

const CustomSplitter: React.FC<any> = ({ ...restProps }) => {
    return (
        <Splitter style={{ height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} {...restProps}>
            <Splitter.Panel defaultSize="40%" min="20%" max="70%" collapsible>
                <Desc text="First" />
            </Splitter.Panel>
            <Splitter.Panel collapsible>
                <Desc text="Second" />
            </Splitter.Panel>
        </Splitter>
    )
}

const AppDivider: React.FC = () => {
    return (
        <Flex gap="middle" vertical>
            <CustomSplitter />
            <CustomSplitter layout="vertical" />
        </Flex>
    )
}

export default AppDivider
