import React, { useContext, useEffect } from 'react'
import warn from 'rc-util/lib/warning'
import IconContext from '../icon/Context'
import { getShadowRoot } from 'rc-util/lib/Dom/shadow'
import { updateCSS } from 'rc-util/lib/Dom/dynamicCSS'
import { iconStyles } from './styleConfig'

export function warning(valid: boolean, message: string) {
    warn(valid, `[@l-icons] ${message}`)
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
