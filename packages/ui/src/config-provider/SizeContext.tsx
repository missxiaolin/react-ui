import React from 'react'

export type SizeType = 'small' | 'middle' | 'large' | undefined

const SizeContext = React.createContext<SizeType>(undefined)

export default SizeContext
