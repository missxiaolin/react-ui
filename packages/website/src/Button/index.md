---
category: Components
title: Button
subtitle: 按钮
description: 按钮用于开始一个即时操作。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7va7RKs3YzIAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*3T4cRqxH9-8AAAAAAAAAAAAADrJ8AQ/original
demo:
    cols: 2
group:
    title: 通用
    order: 1
---

## Button

Demo:

This is an example component.

## 代码演示

```tsx
import { Button, Flex } from 'antd'
import React from 'react'

const App: React.FC = () => (
    <Flex gap="small" wrap>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
    </Flex>
)

export default App
```
