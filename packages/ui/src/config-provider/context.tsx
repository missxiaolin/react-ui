import React, { createContext } from 'react'

export const defaultPrefixCls = 'l'
export const defaultIconPrefixCls = 'l-icon'
const EMPTY_OBJECT = {}

export interface ComponentStyleConfig {
    className?: string
    style?: React.CSSProperties
}

export interface ConfigComponentProps {
    divider?: ComponentStyleConfig
}

export type DirectionType = 'ltr' | 'rtl' | undefined

export interface ConfigConsumerProps extends ConfigComponentProps {
    getTargetContainer?: () => HTMLElement
    getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement
    rootPrefixCls?: string
    iconPrefixCls: string
    getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string
    direction?: DirectionType
}

const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) {
        return customizePrefixCls
    }
    return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : defaultPrefixCls
}

// zombieJ: 🚨 Do not pass `defaultRenderEmpty` here since it will cause circular dependency.
export const ConfigContext = createContext<ConfigConsumerProps>({
    // We provide a default function for Context without provider
    getPrefixCls: defaultGetPrefixCls,
    iconPrefixCls: defaultIconPrefixCls
})

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
        ...propValue,
        classNames: EMPTY_OBJECT,
        styles: EMPTY_OBJECT,
        getPrefixCls,
        direction,
        getPopupContainer
    }
}
