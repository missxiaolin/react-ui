import type { PresetColorType } from './presetColors'

export interface SeedToken extends PresetColorType {
    /**
     * @nameZH 字体
     * @nameEN Font family for default text
     * @desc Ant Design 的字体家族中优先使用系统默认的界面字体，同时提供了一套利于屏显的备用字体库，来维护在不同平台以及浏览器的显示下，字体始终保持良好的易读性和可读性，体现了友好、稳定和专业的特性。
     * @descEN The font family of Ant Design prioritizes the default interface font of the system, and provides a set of alternative font libraries that are suitable for screen display to maintain the readability and readability of the font under different platforms and browsers, reflecting the friendly, stable and professional characteristics.
     */
    fontFamily: string

    /**
     * @nameZH 代码字体
     * @nameEN Font family for code text
     * @desc 代码字体，用于 Typography 内的 code、pre 和 kbd 类型的元素
     * @descEN Code font, used for code, pre and kbd elements in Typography
     */
    fontFamilyCode: string

    /**
     * @nameZH 默认字号
     * @nameEN Default Font Size
     * @desc 设计系统中使用最广泛的字体大小，文本梯度也将基于该字号进行派生。
     * @descEN The most widely used font size in the design system, from which the text gradient will be derived.
     * @default 14
     */
    fontSize: number
}
