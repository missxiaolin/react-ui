import { createContext } from 'react'

import { ConfigTheme } from '../_types/theme.types'

export const ConfigThemeContext = createContext<ConfigTheme | null>(null)
