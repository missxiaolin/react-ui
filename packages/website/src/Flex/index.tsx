import React from 'react'
import { Flex } from '@l/ui'

const AppDivider: React.FC = () => {
    const baseStyle: React.CSSProperties = {
        width: '25%',
        height: 54
    }
    return (
        <>
            <Flex>
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} style={{ ...baseStyle, backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf' }} />
                ))}
            </Flex>
            <br />
            <Flex vertical={true}>
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} style={{ ...baseStyle, backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf' }} />
                ))}
            </Flex>
        </>
    )
}

export default AppDivider
