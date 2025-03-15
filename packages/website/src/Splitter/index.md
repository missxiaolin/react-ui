---
category: Components
title: Splitter
subtitle: 分割面板
group:
    title: 布局
    order: 1
---

## Splitter

自由切分指定区域

### 基础用法

<code src="./index.tsx"></code>

### 受控模式

受控调整尺寸。当 Panel 之间任意一方禁用 resizable，则其拖拽将被禁用。

<code src="./controlled.tsx"></code>

### 垂直方向

使用垂直布局。

<code src="./vertical.tsx"></code>

### 可折叠

配置 `collapsible` 提供快捷收缩能力。可以通过 min 限制收缩后不能通过拖拽展开。

<code src="./collapsible.tsx"></code>

### Splitter

| 参数          | 说明             | 类型                        | 默认值       | 版本 |
| ------------- | ---------------- | --------------------------- | ------------ | ---- |
| layout        | 布局方向         | `horizontal` \| `vertical`  | `horizontal` | -    |
| onResizeStart | 开始拖拽之前回调 | `(sizes: number[]) => void` | -            | -    |
| onResize      | 面板大小变化回调 | `(sizes: number[]) => void` | -            | -    |
| onResizeEnd   | 拖拽结束回调     | `(sizes: number[]) => void` | -            | -    |
| lazy          | 延迟渲染模式     | `boolean`                   | `false`      | -    |

### Panel

| 参数        | 说明                                              | 类型                                            | 默认值  | 版本 |
| ----------- | ------------------------------------------------- | ----------------------------------------------- | ------- | ---- |
| defaultSize | 初始面板大小，支持数字 px 或者文字 '百分比%' 类型 | `number \| string`                              | -       | -    |
| min         | 最小阈值，支持数字 px 或者文字 '百分比%' 类型     | `number \| string`                              | -       | -    |
| max         | 最大阈值，支持数字 px 或者文字 '百分比%' 类型     | `number \| string`                              | -       | -    |
| size        | 受控面板大小，支持数字 px 或者文字 '百分比%' 类型 | `number \| string`                              | -       | -    |
| collapsible | 快速折叠                                          | `boolean \| { start?: boolean; end?: boolean }` | `false` | -    |
| resizable   | 是否开启拖拽伸缩                                  | `boolean`                                       | `true`  | -    |
