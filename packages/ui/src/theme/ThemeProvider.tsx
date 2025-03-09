import React, { useMemo } from 'react'

import { ConfigThemeOverrides } from '../_types/theme.types'

import { defaultConfig } from './context'
import { ConfigThemeContext } from './context'
import { useSafeTheme } from './useTheme'

import { setStyleRoot } from './style'

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
    const mergedTheme = useMemo(() => Object.assign(inherit ? parentTheme : defaultConfig, theme), [theme, parentTheme, inherit])
    setStyleRoot(mergedTheme)

    return <ConfigThemeContext.Provider value={mergedTheme}>{children}</ConfigThemeContext.Provider>
}

ConfigThemeProvider.displayName = '@l/ui/ThemeProvider'
