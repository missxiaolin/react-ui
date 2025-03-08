import React from 'react'
import { Divider } from '@l/ui'

const AppDivider: React.FC = () => (
    <div>
        <p>Lorem</p>
        <Divider />
        <p>Lorem</p>
        <Divider dashed={true} />
        <p>Lorem</p>
        <Divider dashed={true}>sss</Divider>
    </div>
)

export default AppDivider
