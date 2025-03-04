import type { CheckboxProps } from 'antd'
import { Checkbox } from 'antd'
import React from 'react'

const onChange: CheckboxProps['onChange'] = () => {
    //
}

const CheckboxApp: React.FC = () => <Checkbox onChange={onChange}>Checkbox</Checkbox>

export default CheckboxApp
