import * as React from 'react'
import classNames from 'classnames'
import { useComponentConfig } from '../config-provider/context'
import * as SC from './style'
import { componentsPops, GetProp } from '../_types'
import { getScrollContainer } from '../_utils/dom'
import ResizeObserver from 'rc-resize-observer'

export interface StickyProps extends componentsPops {
    zIndex?: number
    target?: string
    offset?: number
    position?: 'top' | 'bottom'
    style?: React.CSSProperties
    change?: (fixed: boolean) => void
    scroll?: (obj: { scrollTop: number; fixed: boolean }) => void
    children?: React.ReactNode
}

const Sticky: React.FC<StickyProps> = props => {
    const { getPrefixCls } = useComponentConfig('public')
    const { className, children, style, zIndex = 100, target: propTarget = '', offset = 0, position = 'top' } = props
    const prefixCls = getPrefixCls('sticky')
    let target: any = null
    const root = React.useRef<HTMLDivElement>(null)
    let scrollContainer: HTMLElement | null | undefined | Window = null // 滚动容器
    const [fixed, setFixed] = React.useState(false)
    const [height, setHeight] = React.useState(0) // height of root
    const [width, setWidth] = React.useState(0) // width of root
    const [scrollTop, setScrollTop] = React.useState(0) // scrollTop of documentElement
    const [clientHeight, setClientHeight] = React.useState(0) // clientHeight of documentElement
    const [transform, setTransform] = React.useState(0) // transform of root
    const [stickyStyle, setStickyStyle] = React.useState<React.CSSProperties>({})
    const rootStyle: React.CSSProperties = {
        height: fixed ? `${height}px` : '',
        width: fixed ? `${width}px` : ''
    }

    const rootCls = classNames(prefixCls, className)
    const cls = classNames({
        [`${prefixCls}--fixed`]: fixed
    })

    React.useEffect(() => {
        if (!fixed) {
            return
        }
        const _offset = offset ? `${offset}px` : 0
        const _transform = transform ? `translateY(${transform}px)` : ''
        setStickyStyle({
            height: `${height}px`,
            width: `${width}px`,
            top: position === 'top' ? _offset : '',
            bottom: position === 'bottom' ? _offset : '',
            transform: _transform,
            zIndex: zIndex
        })
    }, [offset, position, zIndex, fixed])

    const update = () => {
        if (!root.current || !target || !scrollContainer) {
            return
        }
        const rootRect = root.current.getBoundingClientRect()
        const targetRect = target.getBoundingClientRect()
        setHeight(rootRect.height)
        setWidth(rootRect.width)
        setScrollTop(scrollContainer instanceof Window ? document.documentElement.scrollTop : scrollContainer.scrollTop || 0)
        setClientHeight(document.documentElement.clientHeight)
        if (position === 'top') {
            if (propTarget) {
                const difference = targetRect.bottom - offset - height
                setFixed(offset > rootRect.top && targetRect.bottom > 0)
                setTransform(difference < 0 ? difference : 0)
            } else {
                setFixed(offset > rootRect.top)
            }
        } else {
            if (propTarget) {
                const difference = clientHeight - targetRect.top - offset - height
                setFixed(clientHeight - offset < rootRect.bottom && clientHeight > targetRect.top)
                setTransform(difference < 0 ? -difference : 0)
            } else {
                setFixed(clientHeight - offset < rootRect.bottom)
            }
        }
    }

    const onScroll = () => {
        update()
        props.scroll?.({
            scrollTop: scrollTop,
            fixed: fixed
        })
    }

    React.useEffect(() => {
        if (propTarget) {
            target = document.querySelector<HTMLElement>(propTarget) ?? undefined
            if (!target) {
                throw new Error(`Target is not existed: ${props.target}`)
            }
        } else {
            target = document.documentElement
        }
        scrollContainer = getScrollContainer(root.current!, true)
        const container = scrollContainer as HTMLElement
        container.addEventListener('scroll', onScroll)

        return () => {
            container.removeEventListener('scroll', onScroll)
        }
    }, [])

    React.useEffect(() => {
        props.change?.(fixed)
    }, [fixed])

    const onContainerResize: GetProp<typeof ResizeObserver, 'onResize'> = size => {
        update()
    }

    return (
        <ResizeObserver onResize={onContainerResize}>
            <SC.StickyStyle className={rootCls} style={{ ...style, ...rootStyle }} ref={root}>
                <div className={cls} style={stickyStyle}>
                    {children}
                </div>
            </SC.StickyStyle>
        </ResizeObserver>
    )
}

Sticky.displayName = 'Sticky'

export default Sticky
