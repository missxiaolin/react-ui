import React, { useState, useRef, useEffect } from 'react'
import classNames from 'classnames'
import { useComponentConfig } from '../config-provider/context'
import * as SC from './style'
import { componentsPops } from '../_types'

export interface WatermarkProps extends componentsPops {
    name?: string
    gapY?: number // 水印之间的垂直间距
    gapX?: number // 水印之间的水平间距
    zIndex?: number // 追加的水印元素的 z-index
    width?: number // 水印的宽度
    height?: number // 水印的高度
    rotate?: number // 水印绘制时，旋转的角度
    image?: string // 图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印
    imageWidth?: number // 图片宽度
    imageHeight?: number // 图片高度
    content: string // 水印文字内容
    fontColor?: string // 水印文字颜色
    fontStyle?: string
    fontFamily?: string // 水印文字字体
    fontWeight?: string
    fontSize?: number | string // 文字大小
    fullPage?: boolean // 是否覆盖整个页面
    style?: React.CSSProperties
    children?: React.ReactNode
}

const Watermark: React.FC<WatermarkProps> = props => {
    const { getPrefixCls } = useComponentConfig('public')
    const {
        style,
        className,
        gapY = 48,
        gapX = 24,
        zIndex = 2000,
        width = 120,
        height = 64,
        rotate = -22,
        image,
        imageWidth = 120,
        imageHeight = 64,
        content,
        fontColor = 'rgba(0,0,0,.15)',
        fontStyle = 'normal',
        fontFamily = 'PingFang SC',
        fontWeight = 'normal',
        fontSize = 14,
        fullPage = false
    } = props

    const prefixCls = getPrefixCls('watermark')

    const [base64Url, setBase64Url] = useState('')

    const cls = classNames(
        prefixCls,
        {
            [`${prefixCls}__full-page`]: fullPage
        },
        className
    )

    const init = () => {
        const canvas: HTMLCanvasElement = document.createElement('canvas') // 创建一个canvas
        const ratio = window.devicePixelRatio
        const ctx = canvas.getContext('2d')
        const canvasWidth = `${(gapX + width) * ratio}px`
        const canvasHeight = `${(gapY + height) * ratio}px`
        const markWidth = width * ratio
        const markHeight = height * ratio
        canvas.setAttribute('width', canvasWidth)
        canvas.setAttribute('height', canvasHeight)

        if (ctx) {
            // 图片
            if (image) {
                ctx.translate(markWidth / 2, markHeight / 2)
                ctx.rotate((Math.PI / 180) * Number(rotate))

                const img = new Image()
                img.crossOrigin = 'anonymous'
                img.referrerPolicy = 'no-referrer'
                img.src = image
                img.onload = () => {
                    ctx.drawImage(img, (-imageWidth * ratio) / 2, (-imageHeight * ratio) / 2, imageWidth * ratio, imageHeight * ratio)
                    ctx.restore()
                    setBase64Url(canvas.toDataURL())
                }
                return
            }
            // 文字
            ctx.textBaseline = 'middle'
            ctx.textAlign = 'center'
            // 文字绕中间旋转
            ctx.translate(markWidth / 2, markHeight / 2)
            ctx.rotate((Math.PI / 180) * Number(rotate))

            const markSize = Number(fontSize) * ratio
            ctx.font = `${fontStyle} normal ${fontWeight} ${markSize}px/${markHeight}px ${fontFamily}`
            ctx.fillStyle = fontColor

            ctx.fillText(content, 0, 0)
            ctx.restore()
            setBase64Url(canvas.toDataURL())
        } else {
            throw new Error('当前环境不支持Canvas')
        }
    }

    React.useEffect(() => {
        init()
    }, [
        zIndex,
        gapX,
        gapY,
        width,
        height,
        rotate,
        image,
        imageWidth,
        imageHeight,
        content,
        fontStyle,
        fontWeight,
        fontColor,
        fontSize,
        fontFamily
    ])

    const watermarkStyles: React.CSSProperties = {
        zIndex,
        backgroundSize: `${gapX + width}px`,
        backgroundImage: `url('${base64Url}')`
    }

    return <SC.WatermarkStyle className={cls} style={{ ...style, ...watermarkStyles }}></SC.WatermarkStyle>
}

Watermark.displayName = 'Watermark'

export default Watermark
