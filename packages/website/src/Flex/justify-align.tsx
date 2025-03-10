import React from 'react'
import { Flex, FlexProps } from '@l/ui'

const AppDivider: React.FC = () => {
    const justifyOptions = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']
    const alignOptions = ['flex-start', 'center', 'flex-end']

    const [alignItems, setAlignItems] = React.useState<FlexProps['align']>(alignOptions[0])

    const [justify, setJustify] = React.useState<FlexProps['justify']>(justifyOptions[0])
    const baseStyle: React.CSSProperties = {
        width: '10%',
        height: 54
    }
    return (
        <>
            <Flex justify={justify} align={alignItems}>
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} style={{ ...baseStyle, backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf' }} />
                ))}
            </Flex>
        </>
    )
}

export default AppDivider
