import React from 'react'
import { Divider } from '@l/ui'

const AppDivider: React.FC = () => (
    <div>
        <p>Lorem</p>
        <Divider />
        <p>Lorem</p>
        <Divider dashed />
        <p>Lorem</p>
        <Divider dashed>sss</Divider>
    </div>
)

export default AppDivider
