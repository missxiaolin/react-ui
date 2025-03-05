import * as React from 'react'
import type { RenderEmptyHandler } from './defaultRenderEmpty'

export const defaultPrefixCls = 'l'
export const defaultIconPrefixCls = 'l-icon'

const EMPTY_OBJECT = {}

export interface CSPConfig {
    nonce?: string
}

export interface ComponentStyleConfig {
    className?: string
    style?: React.CSSProperties
}

export interface ConfigComponentProps {
    divider?: ComponentStyleConfig
}

export const Variants = ['outlined', 'borderless', 'filled', 'underlined'] as const

export type Variant = (typeof Variants)[number]

export type DirectionType = 'ltr' | 'rtl' | undefined

export interface ConfigConsumerProps extends ConfigComponentProps {
    getTargetContainer?: () => HTMLElement

    getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement
    rootPrefixCls?: string
    iconPrefixCls: string

    getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string
    renderEmpty?: RenderEmptyHandler
    /**
     * @descCN 设置 [Content Security Policy](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP) 配置。
     * @descEN Set the [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) config.
     */
    csp?: CSPConfig
    /** @deprecated Please use `{ button: { autoInsertSpace: boolean }}` instead */
    autoInsertSpaceInButton?: boolean
    variant?: Variant
    virtual?: boolean
    direction?: DirectionType
    popupMatchSelectWidth?: boolean
}

const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) {
        return customizePrefixCls
    }
    return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : defaultPrefixCls
}

// zombieJ: 🚨 Do not pass `defaultRenderEmpty` here since it will cause circular dependency.
export const ConfigContext = React.createContext<ConfigConsumerProps>({
    // We provide a default function for Context without provider
    getPrefixCls: defaultGetPrefixCls,
    iconPrefixCls: defaultIconPrefixCls
})

type ComponentReturnType<T extends keyof ConfigComponentProps> = Omit<NonNullable<ConfigComponentProps[T]>, 'classNames' | 'styles'> & {
    classNames: any
    styles: any
    getPrefixCls: ConfigConsumerProps['getPrefixCls']
    direction: ConfigConsumerProps['direction']
    getPopupContainer: ConfigConsumerProps['getPopupContainer']
}

/**
 * Get ConfigProvider configured component props.
 * This help to reduce bundle size for saving `?.` operator.
 * Do not use as `useMemo` deps since we do not cache the object here.
 *
 * NOTE: not refactor this with `useMemo` since memo will cost another memory space,
 * which will waste both compare calculation & memory.
 */
export function useComponentConfig<T extends keyof ConfigComponentProps>(propName: T) {
    const context = React.useContext(ConfigContext)
    const { getPrefixCls, direction, getPopupContainer } = context

    const propValue = context[propName]
    return {
        classNames: EMPTY_OBJECT,
        styles: EMPTY_OBJECT,
        ...propValue,
        getPrefixCls,
        direction,
        getPopupContainer
    } as ComponentReturnType<T>
}
