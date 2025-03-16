import * as React from 'react'
import classNames from 'classnames'
import { useComponentConfig } from '../config-provider/context'
import { default as createFromIconFontCN } from '../icon/IconFont'
import * as SC from './style'
import { componentsPops } from '../_types'
import { getScrollContainer } from '../_utils/dom'
import { iconBaseUrl } from '../_utils'

export interface BackTopProps extends componentsPops {
    visibilityHeight?: number
    target?: string
    right?: number
    bottom?: number
    icon?: string
    style?: React.CSSProperties
    children?: React.ReactNode
    iconOrientation?: string
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const BackTop: React.FC<BackTopProps> = props => {
    const { getPrefixCls } = useComponentConfig('public')
    const { className, children, style, visibilityHeight = 200, target = '', right = 40, bottom = 40, icon = 'l-huidaodingbu' } = props
    const prefixCls = getPrefixCls('backtop')
    let el: HTMLElement | undefined = document.documentElement
    let scrollContainer: HTMLElement | Window | undefined = document.documentElement
    const root = React.useRef<HTMLDivElement>(null)
    const [scrollTop, setScrollTop] = React.useState(0)
    const [visible, setVisible] = React.useState(false)
    const [cStyle, setCStyle] = React.useState<React.CSSProperties>({})

    const cls = classNames(prefixCls, {}, className)

    const handleScrollThrottled = React.useCallback(() => {
        if (scrollContainer) {
            const newScrollTop = scrollContainer instanceof Window ? document.documentElement.scrollTop : scrollContainer.scrollTop || 0
            setScrollTop(newScrollTop)
        }
    }, [scrollContainer])

    React.useEffect(() => {
        if (el) {
            setVisible(scrollTop >= visibilityHeight)
        }
    }, [scrollTop, visibilityHeight])

    const scrollToTop = () => {
        const frameFunc = () => {
            if (scrollContainer) {
                const el = scrollContainer as HTMLElement
                el.scrollTop = 0
            }
        }
        requestAnimationFrame(frameFunc)
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        scrollToTop()
        props.onClick?.(e)
    }

    React.useEffect(() => {
        setCStyle({
            bottom: `${bottom}px`,
            right: `${right}px`
        })
    }, [bottom, right])

    React.useEffect(() => {
        if (target) {
            el = document.querySelector<HTMLElement>(target) ?? undefined
            if (!el) {
                throw `backtop target is not existed: ${props.target}`
            }
            scrollContainer = el
        }
        scrollContainer = getScrollContainer(root.current!, true)
        scrollContainer?.addEventListener('scroll', handleScrollThrottled)

        return () => {
            scrollContainer?.removeEventListener('scroll', handleScrollThrottled)
        }
    }, [])

    const Icon = createFromIconFontCN({
        // 在 iconFont.cn 上生成
        scriptUrl: iconBaseUrl
    })

    return (
        <SC.BackTopStyle className={cls} style={style} ref={root}>
            {visible ? (
                <div
                    className={`${prefixCls}__fixed`}
                    style={cStyle}
                    onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                        handleClick(e)
                    }}
                >
                    {children ? children : <Icon type={icon} />}
                </div>
            ) : null}
        </SC.BackTopStyle>
    )
}

BackTop.displayName = 'BackTop'

export default BackTop
