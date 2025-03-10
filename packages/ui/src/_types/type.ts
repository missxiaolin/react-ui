import type React from 'react'

export type AnyObject = Record<PropertyKey, any>

export type CustomComponent<P = AnyObject> = React.ComponentType<P> | string
