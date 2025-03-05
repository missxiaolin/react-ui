import type Keyframes from '../Keyframes'
import type * as CSS from 'csstype'

const SKIP_CHECK = '_skip_check_'
const MULTI_VALUE = '_multi_value_'

export type CSSProperties = Omit<CSS.PropertiesFallback<number | string>, 'animationName'> & {
    animationName?: CSS.PropertiesFallback<number | string>['animationName'] | Keyframes
}

export type CSSPropertiesWithMultiValues = {
    [K in keyof CSSProperties]:
        | CSSProperties[K]
        | readonly Extract<CSSProperties[K], string>[]
        | {
              [SKIP_CHECK]?: boolean
              [MULTI_VALUE]?: boolean
              value: CSSProperties[K] | CSSProperties[K][]
          }
}

/* eslint-disable */
export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject }
/* eslint-enable */

export type CSSOthersObject = Record<string, CSSInterpolation>

type ArrayCSSInterpolation = readonly CSSInterpolation[]

export interface CSSObject extends CSSPropertiesWithMultiValues, CSSPseudos, CSSOthersObject {}

export type InterpolationPrimitive = null | undefined | boolean | number | string | CSSObject

export type CSSInterpolation = InterpolationPrimitive | ArrayCSSInterpolation | Keyframes
