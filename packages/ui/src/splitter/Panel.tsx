import React, { forwardRef } from 'react'
import classNames from 'classnames'
import { componentsPops } from '../_types'

export interface SplitterPanelProps extends componentsPops {
    prefixCls?: string
    min?: number | string
    max?: number | string
    size?: number | string
    collapsible?: boolean | { start?: boolean; end?: boolean }
    resizable?: boolean
    defaultSize?: number | string
    style?: React.CSSProperties
    children?: React.ReactNode
}

export const SplitterPanel = forwardRef<HTMLDivElement, React.PropsWithChildren<SplitterPanelProps>>((props, ref) => {
    const { prefixCls, className, children, size, style = {} } = props
    const panelClassName = classNames(
        `${prefixCls}-panel`,
        {
            [`${prefixCls}-panel-hidden`]: size === 0
        },
        className
    )

    const hasSize = size !== undefined

    return (
        <div
            ref={ref}
            className={panelClassName}
            style={{
                ...style,
                // Use auto when start from ssr
                flexBasis: hasSize ? size : 'auto',
                flexGrow: hasSize ? 0 : 1
            }}
        >
            {children}
        </div>
    )
})

SplitterPanel.displayName = 'SplitterPanel'

export default SplitterPanel
