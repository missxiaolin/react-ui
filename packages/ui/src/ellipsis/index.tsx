import React, { useState, useRef, useEffect } from 'react'
import classNames from 'classnames'
import { useComponentConfig } from '../config-provider/context'
import * as SC from './style'
import { componentsPops } from '../_types'

export interface EllipsisProps extends componentsPops {
    rows?: number
    dots?: string
    content?: string
    expandText?: string
    collapseText?: string
    style?: React.CSSProperties
    children?: React.ReactNode
}

const Ellipsis: React.FC<EllipsisProps> = props => {
    const { getPrefixCls } = useComponentConfig('public')
    const { rows = 1, dots = '...', content = '', expandText = '', collapseText = '', style, className } = props

    const root = useRef<HTMLDivElement>(null)
    const [expanded, setExpanded] = useState<boolean>(false)
    const [hasAction, setHasAction] = useState<boolean>(false)
    const [text, setText] = useState<string>('')

    const prefixCls = getPrefixCls('ellipsis')

    const cls = classNames(prefixCls, {}, className)

    const onClickAction = () => {
        setExpanded(!expanded)
    }

    const pxToNum = (value: string | null) => {
        if (!value) return 0
        const match = value.match(/^\d*(\.\d*)?/)
        return match ? Number(match[0]) : 0
    }

    const calcEllipsis = () => {
        const cloneContainer = () => {
            if (!root.current) {
                return
            }
            const originStyle: CSSStyleDeclaration = window.getComputedStyle(root.current)
            const container: HTMLDivElement = document.createElement('div')
            const styleNames: string[] = Array.prototype.slice.apply(originStyle) // 将样式属性名转换为数组
            styleNames.forEach(name => {
                container.style.setProperty(name, originStyle.getPropertyValue(name))
            })
            container.style.position = 'fixed'
            container.style.zIndex = '-9999'
            container.style.top = '-9999px'
            container.style.height = 'auto'
            container.style.minHeight = 'auto'
            container.style.maxHeight = 'auto'
            container.innerText = content
            document.body.appendChild(container)
            return container
        }

        const calcEllipsisText = (container: HTMLDivElement, maxHeight: number) => {
            let left = 0
            let right = content.length
            let res = -1

            while (left <= right) {
                const mid = Math.floor((left + right) / 2)
                container.innerText = content.slice(0, mid) + dots + expandText
                if (container.offsetHeight <= maxHeight) {
                    left = mid + 1
                    res = mid
                } else {
                    right = mid - 1
                }
            }
            return content.slice(0, res) + dots
        }

        const container = cloneContainer()
        if (!container) return

        const { paddingBottom, paddingTop, lineHeight } = container.style // 获取容器内边距和行高

        const maxHeight = (Number(rows) + 0.5) * pxToNum(lineHeight) + pxToNum(paddingTop) + pxToNum(paddingBottom)
        if (maxHeight < container.offsetHeight) {
            setHasAction(true)
            setText(calcEllipsisText(container, maxHeight))
        } else {
            setHasAction(false)
            setText(content)
        }

        document.body.removeChild(container)
    }

    useEffect(() => {
        calcEllipsis()
    }, [content])

    const node = React.useMemo(() => {
        if (!hasAction) {
            return null
        }
        return (
            <span className="l-ellipsis-span" onClick={onClickAction}>
                {expanded ? collapseText : expandText}
            </span>
        )
    }, [hasAction, expanded, collapseText, expandText])

    return (
        <SC.EllipsisStyle className={cls} style={style} ref={root}>
            {expanded ? content : text}
            {node}
        </SC.EllipsisStyle>
    )
}

Ellipsis.displayName = 'Ellipsis'

export default Ellipsis
