---
category: Components
title: Ellipsis
subtitle: 文本省略
group:
    title: 通用
    order: 1
---

### 文本省略

文本超出容器宽度时，自动省略。

### 基础使用

<code src="./index.tsx"></code>

### 展开/收起

<code src="./expand.tsx"></code>

### 自定义行数

<code src="./rows.tsx"></code>

### 文本 属性

| 属性          | 说明             | 类型   | 可选值 | 默认值 | 版本 |
| ------------- | ---------------- | ------ | ------ | ------ | ---- |
| rows          | 展示的行数       | number | 1      | 1      |      |
| content       | 需要展示的文本   | string | -      |        |      |
| expand-text   | 展开操作的文案   | string | —      |        |      |
| collapse-text | 收起操作的文案   | string | —      |        |      |
| dots          | 省略号的文本内容 | string | —      |        |      |

### 文本 Events

| 时间         | 说明                | 回调              |
| ------------ | ------------------- | ----------------- |
| click-action | 点击展开/收起时触发 | event: MouseEvent |
