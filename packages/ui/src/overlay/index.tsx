import * as React from 'react'
import classNames from 'classnames'
import { useComponentConfig } from '../config-provider/context'
import * as SC from './style'
import { componentsPops } from '../_types'

export interface OverlayProps extends componentsPops {
    visible?: boolean
    zIndex?: number
    duration?: number
    lockScroll?: boolean
    closeOnClickOverlay?: boolean
    onClose?: () => void
    modal?: boolean
    position?: 'top' | 'bottom' | 'left' | 'right'
    offset?: number | string
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    style?: React.CSSProperties
    children?: React.ReactNode
}

const Overlay: React.FC<OverlayProps> = props => {
    const { getPrefixCls } = useComponentConfig('public')
    const {
        className,
        children,
        style,
        visible = false,
        zIndex = 2000,
        duration = 0.3,
        lockScroll = true,
        closeOnClickOverlay = true,
        modal = true,
        position = 'right',
        offset = 0
    } = props
    const prefixCls = getPrefixCls('overlay')

    const cls = classNames(
        prefixCls,
        {
            [`is-model`]: !modal
        },
        className
    )

    const [overlayStyle, setOverlayStyle] = React.useState<React.CSSProperties>({})

    React.useEffect(() => {
        setOverlayStyle({
            transitionDuration: `${duration}s`,
            zIndex: zIndex,
            [position]: `${offset}px`,
            ...style
        })
    }, [duration, zIndex, position, offset, style])

    React.useEffect(() => {
        if (visible && !lockScroll) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        // 清理函数，在组件卸载时恢复 body 的 overflow 样式
        return () => {
            document.body.style.overflow = ''
        }
    }, [visible, lockScroll])

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        props.onClick?.(e)
        if (closeOnClickOverlay) {
            props.onClose?.()
        }
    }

    return (
        (visible && (
            <SC.OverlayStyle className={cls} style={{ ...overlayStyle }} onClick={onClick}>
                {children}
            </SC.OverlayStyle>
        )) ||
        null
    )
}

Overlay.displayName = 'Overlay'

export default Overlay
