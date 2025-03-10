---
category: Components
title: Flex
subtitle: 弹性布局
group:
    title: 布局
    order: 1
---

## Flex

用于对齐的弹性布局容器。

## 基础用法

<code src="./index.tsx"></code>

## 对其方式

<code src="./justify-align.tsx"></code>

## 设置间隙

<code src="./gap.tsx"></code>

## 自动换行

<code src="./wrap.tsx"></code>

## Flex 属性

| 属性     | 说明                                                   | 类型    | 可选值                                                                              | 默认值 |
| -------- | ------------------------------------------------------ | ------- | ----------------------------------------------------------------------------------- | ------ |
| vertical | flex 主轴的方向是否垂直，使用 `flex-direction: column` | boolean |                                                                                     | false  |
| wrap     | 设置元素单行显示还是多行显示                           | boolean |                                                                                     | nowrap |
| justify  | 设置元素在主轴方向上的对齐方式                         | string  | [justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content) | normal |
| align    | 设置元素在交叉轴方向上的对齐方式                       | string  | [align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)         | normal |
| flex     | flex CSS 简写属性                                      | string  | [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)                       | normal |
| gap      | 设置网格之间的间隙                                     | number  | -                                                                                   | -      |
