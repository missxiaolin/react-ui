---
category: Components
title: Overlay
subtitle: 模态框
group:
    title: 反馈组件
    order: 2
---

### 水印

给页面的某个区域加上水印。

### 基础使用

<code src="./index.tsx"></code>

### 属性

| 属性                   | 说明                        | 类型          | 可选值 | 默认值 |     | 版本 |
| ---------------------- | --------------------------- | ------------- | ------ | ------ | --- | ---- |
| visible                | 控制遮罩的显示/隐藏         | boolean       | -      |        |     |
| z-index                | 自定义遮罩层级              | string/number | -      |        |     |
| duration               | 显示/隐藏的动画时长，单位秒 | string/number | -      |        |     |
| className              | 自定义遮罩类名              | string        | -      |        |     |
| style                  | 自定义遮罩样式              | CSSProperties | -      |        |     |
| lock-scroll            | 遮罩显示时的背景是否锁定    | boolean       | -      |        |     |
| close-on-click-overlay | 点击遮罩时是否关闭          | boolean       | -      |        |     |

## 方法

| 方法名  | 参数类型 | 说明     |
| ------- | -------- | -------- |
| onClick | -        | 点击触发 |
| onClose | -        | 关闭触发 |

### 插槽

| 事件名  | 说明               |
| ------- | ------------------ |
| default | 内嵌遮罩内容自定义 |
