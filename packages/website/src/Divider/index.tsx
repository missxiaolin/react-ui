import React from 'react'
import { Divider, ConfigProvider } from '@l/ui'

const AppDivider: React.FC = () => {
    const tokens = {
        // getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => {
        //     return `lui-${suffixCls}`
        // }
    }
    return (
        <div>
            <ConfigProvider tokens={tokens}>
                <p>Lorem</p>
                <Divider />
                <p>Lorem</p>
                <Divider>sss</Divider>
            </ConfigProvider>
        </div>
    )
}

export default AppDivider
