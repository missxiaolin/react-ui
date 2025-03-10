import { FlexProps } from '../interface'
import { SizeType } from '../../config-provider/SizeContext'

export const createFlexClassNames = (prefixCls: string, props: FlexProps) => {
    return {}
}

export function isPresetSize(size?: SizeType | string | number): size is SizeType {
    return ['small', 'middle', 'large'].includes(size as string)
}
