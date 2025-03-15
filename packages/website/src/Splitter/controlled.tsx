import React from 'react'
import { Splitter, Flex } from '@l/ui'

const Desc: React.FC<Readonly<{ text?: string | number }>> = props => (
    <Flex justify="center" align="center" style={{ height: '100%' }}>
        {props.text}
    </Flex>
)

const AppDivider: React.FC = () => {
    const [sizes, setSizes] = React.useState<(number | string)[]>(['50%', '50%'])
    const [enabled, setEnabled] = React.useState(true)

    return (
        <div>
            <button
                onClick={() => {
                    setEnabled(!enabled)
                }}
            >
                {!enabled ? 'disable' : 'Enable'}
            </button>
            <button onClick={() => setSizes(['50%', '50%'])}>Reset</button>
            <Splitter style={{ height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} onResize={setSizes}>
                <Splitter.Panel size={sizes[0]} resizable={enabled}>
                    <Desc text="First" />
                </Splitter.Panel>
                <Splitter.Panel size={sizes[1]}>
                    <Desc text="Second" />
                </Splitter.Panel>
            </Splitter>
        </div>
    )
}

export default AppDivider
