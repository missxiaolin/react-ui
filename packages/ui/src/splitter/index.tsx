import React, { useState } from 'react'
import classNames from 'classnames'
import ResizeObserver from 'rc-resize-observer'
import useEvent from 'rc-util/lib/hooks/useEvent'
import { useComponentConfig } from '../config-provider/context'
import SplitBar from './SplitBar'
import SplitterPanel from './Panel'
import * as SC from './style'
import { componentsPops, GetProp } from '../_types'
import useItems from './hooks/useItems'
import { warning } from '../_utils'
import useSizes from './hooks/useSizes'
import useResizable from './hooks/useResizable'
import useResize from './hooks/useResize'

export interface SplitterProps extends componentsPops {
    layout?: 'horizontal' | 'vertical'
    onResizeStart?: (sizes: number[]) => void
    onResize?: (sizes: number[]) => void
    onResizeEnd?: (sizes: number[]) => void
    lazy?: boolean
    style?: React.CSSProperties
    children?: React.ReactNode
}

const SplitterComp: React.FC<React.PropsWithChildren<SplitterProps>> = props => {
    const { getPrefixCls } = useComponentConfig('public')
    const { className, style, layout = 'horizontal', children, rootClassName, onResizeStart, onResize, onResizeEnd, lazy } = props

    const isRTL = false

    const prefixCls = getPrefixCls('splitter')

    // ======================== Direct ========================
    const isVertical = layout === 'vertical'
    const reverse = !isVertical && false

    // ====================== Items Data ======================
    const items = useItems(children)

    // >>> Warning for uncontrolled
    // const warning = devUseWarning('Splitter')

    let existSize = false
    let existUndefinedSize = false

    items.forEach(item => {
        if (item.size !== undefined) {
            existSize = true
        } else {
            existUndefinedSize = true
        }
    })

    if (existSize && existUndefinedSize && !onResize) {
        warning(false, 'When part of `Splitter.Panel` has `size`, `onResize` is required or change `size` to `defaultSize`.', 'Splitter')
    }

    // ====================== Container =======================
    const [containerSize, setContainerSize] = useState<number | undefined>()

    const onContainerResize: GetProp<typeof ResizeObserver, 'onResize'> = size => {
        const { offsetWidth, offsetHeight } = size
        const containerSize = isVertical ? offsetHeight : offsetWidth
        // Skip when container has no size, Such as nested in a hidden tab panel
        // to fix: https://github.com/ant-design/ant-design/issues/51106
        if (containerSize === 0) {
            return
        }
        setContainerSize(containerSize)
    }

    // ========================= Size =========================
    const [panelSizes, itemPxSizes, itemPtgSizes, itemPtgMinSizes, itemPtgMaxSizes, updateSizes] = useSizes(items, containerSize)

    // ====================== Resizable =======================
    const resizableInfos = useResizable(items, itemPxSizes, isRTL)

    const [onOffsetStart, onOffsetUpdate, onOffsetEnd, onCollapse, movingIndex] = useResize(
        items,
        resizableInfos,
        itemPtgSizes,
        containerSize,
        updateSizes,
        isRTL
    )

    // ======================== Events ========================
    const onInternalResizeStart = useEvent((index: number) => {
        onOffsetStart(index)
        onResizeStart?.(itemPxSizes)
    })

    const onInternalResizeUpdate = useEvent((index: number, offset: number) => {
        const nextSizes = onOffsetUpdate(index, offset)
        onResize?.(nextSizes)
    })

    const onInternalResizeEnd = useEvent(() => {
        onOffsetEnd()
        onResizeEnd?.(itemPxSizes)
    })

    const onInternalCollapse = useEvent((index: number, type: 'start' | 'end') => {
        const nextSizes = onCollapse(index, type)
        onResize?.(nextSizes)
        onResizeEnd?.(nextSizes)
    })

    // ======================== Styles ========================
    const containerClassName = classNames(prefixCls, className, `${prefixCls}-${layout}`, rootClassName)

    // ======================== Render ========================
    const maskCls = `${prefixCls}-mask`

    const stackSizes = React.useMemo(() => {
        const mergedSizes: number[] = []

        let stack = 0
        for (let i = 0; i < items.length; i += 1) {
            stack += itemPtgSizes[i]
            mergedSizes.push(stack)
        }

        return mergedSizes
    }, [itemPtgSizes])

    const mergedStyle: React.CSSProperties = { ...style }

    return (
        <ResizeObserver onResize={onContainerResize}>
            <SC.SplitterStyle style={mergedStyle} className={containerClassName}>
                {items.map((item, idx) => {
                    // Panel
                    const panel = <SplitterPanel {...item} prefixCls={prefixCls} size={panelSizes[idx]} />

                    // Split Bar
                    let splitBar: React.ReactElement | null = null

                    const resizableInfo = resizableInfos[idx]
                    if (resizableInfo) {
                        const ariaMinStart = (stackSizes[idx - 1] || 0) + itemPtgMinSizes[idx]
                        const ariaMinEnd = (stackSizes[idx + 1] || 100) - itemPtgMaxSizes[idx + 1]

                        const ariaMaxStart = (stackSizes[idx - 1] || 0) + itemPtgMaxSizes[idx]
                        const ariaMaxEnd = (stackSizes[idx + 1] || 100) - itemPtgMinSizes[idx + 1]

                        splitBar = (
                            <SplitBar
                                lazy={lazy}
                                index={idx}
                                active={movingIndex === idx}
                                prefixCls={prefixCls}
                                vertical={isVertical}
                                resizable={resizableInfo.resizable}
                                ariaNow={stackSizes[idx] * 100}
                                ariaMin={Math.max(ariaMinStart, ariaMinEnd) * 100}
                                ariaMax={Math.min(ariaMaxStart, ariaMaxEnd) * 100}
                                startCollapsible={resizableInfo.startCollapsible}
                                endCollapsible={resizableInfo.endCollapsible}
                                onOffsetStart={onInternalResizeStart}
                                onOffsetUpdate={(index: any, offsetX: any, offsetY: any) => {
                                    let offset = isVertical ? offsetY : offsetX
                                    if (reverse) {
                                        offset = -offset
                                    }
                                    onInternalResizeUpdate(index, offset)
                                }}
                                onOffsetEnd={onInternalResizeEnd}
                                onCollapse={onInternalCollapse}
                                containerSize={containerSize || 0}
                            />
                        )
                    }

                    return (
                        <React.Fragment key={`split-panel-${idx}`}>
                            {panel}
                            {splitBar}
                        </React.Fragment>
                    )
                })}
                {/* Fake mask for cursor */}
                {typeof movingIndex === 'number' && <div aria-hidden className={classNames(maskCls, `${maskCls}-${layout}`)} />}
            </SC.SplitterStyle>
        </ResizeObserver>
    )
}

type CompoundedComponent = typeof SplitterComp & {
    Panel: typeof SplitterPanel
}

const Splitter = SplitterComp as CompoundedComponent

Splitter.Panel = SplitterPanel

Splitter.displayName = 'Splitter'

export default Splitter
