---
category: Components
title: Watermark
subtitle: 水印
group:
    title: 反馈组件
    order: 1
---

### 水印

给页面的某个区域加上水印。

### 基础使用

<code src="./index.tsx"></code>

### 其他

<code src="./other.tsx"></code>

### Watermark 属性

| 属性         | 说明                                                 | 类型    | 可选值 | 默认值 | 版本 |
| ------------ | ---------------------------------------------------- | ------- | ------ | ------ | ---- |
| width        | 水印的宽度                                           | number  | -      |        |      |
| height       | 水印的高度                                           | number  | -      |        |      |
| rotate       | 水印绘制时，旋转的角度                               | number  | -      |        |      |
| image        | 图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印 | string  | -      |        |      |
| image-width  | 图片宽度                                             | number  | -      |        |      |
| image-height | 图片高度                                             | number  | -      |        |      |
| z-index      | 追加的水印元素的 z-index                             | number  | -      |        |      |
| content      | 水印文字内容                                         | string  | -      |        |      |
| font-color   | 水印文字颜色                                         | string  | -      |        |      |
| font-size    | 文字大小                                             | string  | -      | -      |      |
| gap-x        | 水印之间的水平间距                                   | number  | -      |        |      |
| gap-y        | 水印之间的垂直间距                                   | number  | -      |        |      |
| full-page    | 是否覆盖整个页面                                     | boolean | -      |        |      |
| font-family  | 水印文字字体                                         | boolean | -      |        |      |
