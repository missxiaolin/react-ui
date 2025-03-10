import React from 'react'
import classNames from 'classnames'
import omit from 'rc-util/lib/omit'
import { FlexProps } from './interface'
import { defaultGetPrefixCls } from '../config-provider/context'
import { createFlexClassNames, isPresetSize } from './utils'
import * as SC from './style'

const Flex = React.forwardRef<HTMLElement, FlexProps>((props, ref) => {
    const { rootClassName, className, style, flex, gap, children, vertical = false, component: Component = 'div', ...othersProps } = props
    const prefixCls = defaultGetPrefixCls('flex', '')
    const mergedVertical = vertical ?? ''

    const mergedCls = classNames(className, rootClassName, prefixCls, createFlexClassNames(prefixCls, props), {
        [`${prefixCls}-gap-${gap}`]: isPresetSize(gap),
        [`${prefixCls}-vertical`]: mergedVertical,
        [`${prefixCls}-justify-${othersProps.justify}`]: !!othersProps.justify,
        [`${prefixCls}-align-${othersProps.align}`]: !!othersProps.align,
        [`${prefixCls}-wrap`]: !!othersProps.wrap
    })

    const mergedStyle: React.CSSProperties = { ...style }

    if (flex) {
        mergedStyle.flex = flex
    }
    if (gap && !isPresetSize(gap)) {
        mergedStyle.gap = gap
    }

    return (
        <SC.FlexStyle className={mergedCls} style={mergedStyle}>
            {children}
        </SC.FlexStyle>
    )
})

Flex.displayName = 'Flex'

export default Flex
