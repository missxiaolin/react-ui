import React from 'react'

export interface objTy {
    [propName: string]: any
}

export interface componentsPops {
    rootClassName?: string
    className?: string
}

/**
 * Get component props
 * @example
 * ```ts
 * import { Checkbox } from 'antd'
 * import type { GetProps } from 'antd';
 *
 * type CheckboxGroupProps = GetProps<typeof Checkbox.Group>
 * ```
 * @since 5.13.0
 */
export type GetProps<T extends React.ComponentType<any> | object> =
    T extends React.ComponentType<infer P> ? P : T extends object ? T : never

/**
 * Get component props by component name
 * @example
 * ```ts
 * import { Select } from 'antd';
 * import type { GetProp, SelectProps } from 'antd';
 *
 * type SelectOption1 = GetProp<SelectProps, 'options'>[number];
 * // or
 * type SelectOption2 = GetProp<typeof Select, 'options'>[number];
 *
 * const onChange: GetProp<typeof Select, 'onChange'> = (value, option) => {
 *  // Do something
 * };
 * ```
 * @since 5.13.0
 */
export type GetProp<T extends React.ComponentType<any> | object, PropName extends keyof GetProps<T>> = NonNullable<GetProps<T>[PropName]>

export type Nullable<T> = T | null
