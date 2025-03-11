import React from 'react'

export interface RowContextType {
    gutter?: string | number
    cols?: string | number
    grid?: boolean
    vertical?: boolean
}

export const RowContext = React.createContext<RowContextType>({
    gutter: '',
    cols: '',
    grid: false,
    vertical: false
})

export const RowContextProvider = RowContext.Provider
