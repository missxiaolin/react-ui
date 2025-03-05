import React, { useMemo } from 'react'

import { ConfigThemeOverrides } from '../_types/theme.types'

import { DEFAULT_THEME } from './default-theme'
import { ConfigThemeContext } from './context'
import { useSafeTheme } from './useTheme'

export interface ThemeProviderProps {
    /** Determines whether theme should be inherited from parent Provider, `true` by default */
    inherit?: boolean

    /** Theme override object */
    theme?: ConfigThemeOverrides

    /** Your application or part of the application that requires different theme */
    children?: React.ReactNode
}

export function ConfigThemeProvider({ theme, children, inherit = true }: ThemeProviderProps) {
    const parentTheme = useSafeTheme()
    const mergedTheme = useMemo(() => Object.assign(inherit ? parentTheme : DEFAULT_THEME, theme), [theme, parentTheme, inherit])

    return <ConfigThemeContext.Provider value={mergedTheme}>{children}</ConfigThemeContext.Provider>
}

ConfigThemeProvider.displayName = '@l/ui/ThemeProvider'
