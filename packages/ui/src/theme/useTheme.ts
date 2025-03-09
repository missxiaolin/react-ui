import { useContext } from 'react'

import { ConfigThemeContext, defaultConfig } from './context'

export const useSafeTheme = () => useContext(ConfigThemeContext) || defaultConfig

export const useTheme = () => {
    const ctx = useContext(ConfigThemeContext)
    if (!ctx) {
        throw new Error('@l/ui: Provider was not found in component tree, make sure you have it in your app')
    }

    return ctx
}
