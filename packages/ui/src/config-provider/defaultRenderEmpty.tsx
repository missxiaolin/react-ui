import React from 'react'

type ComponentName = 'Table' | 'Table.filter' /* 👈 5.20.0+ */ | 'List' | 'Select' | 'TreeSelect' | 'Cascader' | 'Transfer' | 'Mentions'

export type RenderEmptyHandler = (componentName?: ComponentName) => React.ReactNode
