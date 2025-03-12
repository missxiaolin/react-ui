---
category: Components
title: Link
subtitle: 链接
group:
    title: 通用
    order: 1
---

## 链接

文字超链接

### 基础用法

基础的文字链接用法。

<code src="./index.tsx"></code>

### 禁用状态

<code src="./disabled.tsx"></code>

文字链接不可用状态。

### Link 属性

| 属性            | 说明                                             | 类型                                        | 可选值        | 默认值  |
| --------------- | ------------------------------------------------ | ------------------------------------------- | ------------- | ------- |
| type            | 类型 string                                      | primary / success / warning / danger / info | —             | default |
| disabled        | 是否为禁用状态                                   | boolean                                     | —             | false   |
| icon            | 图标组件样式名，详情参考[icon](/components/icon) | string                                      | —             | —       |
| href            | 链接地址                                         | string                                      | —             | —       |
| target          | 链接方式                                         | string                                      | —             | —       |
| iconUrl         | icon url                                         | string                                      | —             | —       |
| iconOrientation | icon 方向                                        | string                                      | left \| right | —       |
