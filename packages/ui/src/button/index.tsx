import React, { useRef } from 'react'
import Group from './button-group'
import { ButtonHTMLType } from './buttonHelpers'
import { useComposeRef } from 'rc-util/lib/ref'

export interface BaseButtonProps {
    disabled?: boolean
    loading?: boolean | { delay?: number; icon?: React.ReactNode }
}

type MergedHTMLAttributes = Omit<
    React.HTMLAttributes<HTMLElement> & React.ButtonHTMLAttributes<HTMLElement> & React.AnchorHTMLAttributes<HTMLElement>,
    'type' | 'color'
>

export interface ButtonProps extends BaseButtonProps, MergedHTMLAttributes {
    href?: string
    htmlType?: ButtonHTMLType
    autoInsertSpace?: boolean
}

const InternalCompoundedButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
    const { loading } = props
    const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
    const mergedRef = useComposeRef(ref, buttonRef)
    if (loading) {
        //
    }
    return <a ref={mergedRef as React.Ref<HTMLAnchorElement>}>111</a>
})

type CompoundedComponent = typeof InternalCompoundedButton & {
    /** @deprecated Please use `Space.Compact` */
    Group: typeof Group
    /** @internal */
    __ANT_BUTTON: boolean
}

const Button = InternalCompoundedButton as CompoundedComponent

Button.Group = Group
Button.__ANT_BUTTON = true

export default Button
