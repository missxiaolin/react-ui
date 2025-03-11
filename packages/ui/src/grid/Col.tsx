import * as React from 'react'
import classNames from 'classnames'
import { useComponentConfig } from '../config-provider/context'
import * as SC from './style'
import { RowContext } from './context'
import { isNumber, isString } from '../_utils'
import { objTy } from '../_types'

export interface ColProps {
    flex?: string | number
    children?: React.ReactNode
    style?: React.CSSProperties
}

const Col: React.FC<ColProps> = props => {
    const { flex = '', children, style } = props
    const { getPrefixCls } = useComponentConfig('col')
    const parentAttrs = React.useContext(RowContext)

    const prefixCls = getPrefixCls('col')

    const attrsCol = parentAttrs.cols || 0 // 获取父组件的cols
    const cls = classNames(prefixCls, {
        'flex-1': !attrsCol,
        [`${prefixCls}-width-${attrsCol}`]: attrsCol
    })

    // 获取 row 一行几列属性
    const colsVal: any = parentAttrs.cols && Number(parentAttrs.cols)
    // 获取当前自定义 col flex 属性
    const colFlexVal = (flex && Number(flex)) || 0
    // 获取 row 定义 间隔属性
    let gutterVla = parentAttrs.gutter
    if (isNumber(gutterVla) || (isString(gutterVla) && !gutterVla.endsWith('px'))) {
        gutterVla = `${gutterVla}px`
    }
    // 计算 当  col:flex >=  row: cols 则取 flex
    const gColsVal = colsVal >= colFlexVal ? colFlexVal : colsVal - (colFlexVal - 1)

    const colStyles: objTy = {}
    if (colsVal) {
        colStyles['--l-rows-grid'] = colsVal
    }
    if (colFlexVal) {
        colStyles['--l-col-flex'] = colFlexVal ? (gColsVal <= 0 ? 1 : gColsVal) : 1
    }
    if (gutterVla && gutterVla.length > 2) {
        colStyles['--l-col-gutter-width'] = gutterVla
    }

    return (
        <SC.ColStyle className={cls} style={{ ...style, ...colStyles }}>
            {children}
        </SC.ColStyle>
    )
}

Col.displayName = 'Col'

export default Col
