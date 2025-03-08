import { createContext } from 'react'

import { ConfigTheme } from '../_types/theme.types'

import defaultConfig from './seed'

export { defaultConfig }

export const ConfigThemeContext = createContext<ConfigTheme | null>(null)
