---
category: Components
title: Space
subtitle: 间距
group:
    title: 布局
    order: 1
---

## Space 间距

设置组件之间的间距。

### 基础用法

<code src="./index.tsx"></code>

### 垂直间距

<code src="./vertical.tsx"></code>

### 对齐

<code src="./align.tsx"></code>

### 自动换行

<code src="./wrap.tsx"></code>

### Space

| 参数       | 说明                                   | 类型                                                | 默认值       | 版本 |
| ---------- | -------------------------------------- | --------------------------------------------------- | ------------ | ---- |
| align      | 对齐方式                               | `start` \| `end` \|`center` \|`baseline`            | -            |      |
| classNames | 语义化 className                       | [Record<SemanticDOM, string>](#semantic-dom)        | -            |      |
| direction  | 间距方向                               | `vertical` \| `horizontal`                          | `horizontal` |      |
| size       | 间距大小                               | [Size](#size) \| [Size\[\]](#size)                  | `small`      |      |
| split      | 设置分隔符                             | ReactNode                                           | -            |      |
| styles     | 语义化 style                           | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | -            |      |
| wrap       | 是否自动换行，仅在 `horizontal` 时有效 | boolean                                             | false        |      |

### Size

`'small' | 'middle' | 'large' | number`

### Space.Compact

| 参数      | 说明                         | 类型                           | 默认值       | 版本 |
| --------- | ---------------------------- | ------------------------------ | ------------ | ---- |
| block     | 将宽度调整为父元素宽度的选项 | boolean                        | false        |      |
| direction | 指定排列方向                 | `vertical` \| `horizontal`     | `horizontal` |      |
| size      | 子组件大小                   | `large` \| `middle` \| `small` | `middle`     |      |
