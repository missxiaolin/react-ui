import React from 'react'
import { ConfigThemeOverrides } from '../_types/theme.types'
import { ConfigThemeProvider } from '../theme/ThemeProvider'
import { ConfigContext } from './context'

export interface ConfigProviderProps {
    /**
     * The theme overrides to apply.
     */
    theme?: ConfigThemeOverrides
    /**
     * The children to render.
     */
    children?: React.ReactNode
}

export const ConfigProvider: React.FC<ConfigProviderProps> = ({ theme, children }) => {
    return (
        <ConfigContext.Provider value={{}}>
            <ConfigThemeProvider theme={theme}>{children}</ConfigThemeProvider>
        </ConfigContext.Provider>
    )
}

ConfigProvider.displayName = '@l/ui/ConfigProvider'
