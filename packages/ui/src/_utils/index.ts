import React, { useContext, useEffect } from 'react'
import warn from 'rc-util/lib/warning'
import IconContext from '../icon/Context'
import { getShadowRoot } from 'rc-util/lib/Dom/shadow'
import { updateCSS } from 'rc-util/lib/Dom/dynamicCSS'
import { iconStyles } from './styleConfig'
import { useComponentConfig } from '../config-provider/context'

export const iconBaseUrl = '//at.alicdn.com/t/c/font_4054851_le4r49cthb.js'

export function warning(valid: boolean, message: string, name?: string) {
    warn(valid, `[${name ? '' : '@l-icons'}] ${message}`)
}

export const svgBaseProps = {
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true',
    focusable: 'false'
}

export const useInsertStyles = (eleRef: React.RefObject<HTMLElement>) => {
    const { csp, prefixCls, layer } = useContext(IconContext)
    let mergedStyleStr = iconStyles

    if (prefixCls) {
        mergedStyleStr = mergedStyleStr.replace(/l-icon/g, prefixCls)
    }

    if (layer) {
        mergedStyleStr = `@layer ${layer} {\n${mergedStyleStr}\n}`
    }

    useEffect(() => {
        const ele = eleRef.current as HTMLElement
        const shadowRoot = getShadowRoot(ele)

        updateCSS(mergedStyleStr, '@l-icons', {
            prepend: !layer,
            csp,
            attachTo: shadowRoot
        })
    }, [])
}

export function unit(num: string | number) {
    if (typeof num === 'number') {
        return `${num}px`
    }
    return num
}

export const getPrefix = (name: string) => {
    const customizePrefixCls = ''
    const { getPrefixCls } = useComponentConfig('root')
    const prefixCls = getPrefixCls(name, customizePrefixCls)

    return prefixCls
}

export const transformString = (str: string) => {
    return str.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)
}

export const isNumber = (val: unknown): val is number => typeof val === 'number'

export function isUndefined(val: any): val is undefined {
    return val === undefined
}

export function isString(value: any): value is string {
    return typeof value === 'string'
}
