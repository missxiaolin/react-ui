import { updateCSS } from 'rc-util/lib/Dom/dynamicCSS'
import { useComponentConfig } from '../../config-provider/context'
import { transformString } from '../../_utils'
import derivative from '../themes/light'

const mergedStyleStr = `
:root {
}
`

export const setStyleRoot = (theme: any) => {
    const t = Object.assign({}, theme, derivative())
    const { getPrefixCls } = useComponentConfig('root')
    const prefixCls = getPrefixCls()
    let styleStr = ``
    Object.keys(t).forEach(key => {
        styleStr += `--${prefixCls}-${transformString(key)}: ${t[key]};\n`
    })
    updateCSS(`:root{${styleStr}}`, `@${prefixCls}-root`)
}
