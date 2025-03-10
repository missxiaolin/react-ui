import type React from 'react'

import type { SizeType } from '../config-provider/SizeContext'
import type { AnyObject, CustomComponent } from '../_types/type'

export interface FlexProps<P = AnyObject> extends React.HTMLAttributes<HTMLElement> {
    rootClassName?: string
    vertical?: boolean
    wrap?: boolean | React.CSSProperties['flexWrap']
    justify?: React.CSSProperties['justifyContent']
    align?: React.CSSProperties['alignItems']
    flex?: React.CSSProperties['flex']
    gap?: React.CSSProperties['gap'] | SizeType
    children: React.ReactNode
    component?: CustomComponent<P>
}
