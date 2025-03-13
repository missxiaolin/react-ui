import * as React from 'react'
import classNames from 'classnames'
import { useComponentConfig } from '../config-provider/context'
import * as SC from './style'
import { RowContextType, RowContextProvider } from './context'
import { componentsPops } from '../_types'

export interface RowProps extends componentsPops {
    gutter?: string | number
    cols?: string | number
    grid?: boolean
    vertical?: boolean
    children?: React.ReactNode
    style?: React.CSSProperties
}

const Row: React.FC<RowProps> = props => {
    const { getPrefixCls } = useComponentConfig('row')

    const { gutter = '', grid = false, vertical = false, cols, children, style, className } = props

    const rowContext = React.useMemo<RowContextType>(() => ({ gutter, grid, vertical, cols }), [gutter, grid, vertical, cols])

    const prefixCls = getPrefixCls('row')

    const cls = classNames(
        prefixCls,
        {
            'is-flex-column': vertical
        },
        className
    )

    return (
        <SC.RowStyle className={cls} style={style}>
            <RowContextProvider value={rowContext}>{children}</RowContextProvider>
        </SC.RowStyle>
    )
}

Row.displayName = 'Row'

export default Row
