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
    /**
     * The direction of the layout.
     */
    tokens?: any
}

export const ConfigProvider: React.FC<ConfigProviderProps> = ({ theme, children, tokens }) => {
    return (
        <ConfigContext.Provider value={tokens}>
            <ConfigThemeProvider theme={theme}>{children}</ConfigThemeProvider>
        </ConfigContext.Provider>
    )
}

ConfigProvider.displayName = '@l/ui/ConfigProvider'
