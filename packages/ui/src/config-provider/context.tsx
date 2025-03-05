import { createContext } from 'react'
export interface ConfigContextValue {}

export const ConfigContext = createContext<ConfigContextValue | null>(null)
