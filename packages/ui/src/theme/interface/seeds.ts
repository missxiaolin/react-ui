import type { PresetColorType } from './presetColors'

export interface SeedToken extends PresetColorType {
    //  ----------   Color   ---------- //
    colorPrimary: string
    colorSuccess: string
    colorWarning: string
    colorError: string
    colorInfo: string
    colorTextBase: string
    colorBgBase: string
    colorLink: string
    linkFontWeight: number
    //  ----------   Font   ---------- //
    fontFamily: string
    fontFamilyCode: string
    fontSize: number
    //  ----------   Line   ---------- //
    lineWidth: number
    lineType: string
    //  ----------   BorderRadius   ---------- //
    borderRadius: number
    //  ----------   Size   ---------- //
    sizeUnit: number
    sizeStep: number
    sizePopupArrow: number
    controlHeight: number
    //  ----------   zIndex   ---------- //
    zIndexBase: number
    zIndexPopupBase: number
    //  ----------   Opacity   ---------- //
    opacityImage: number
    //  ----------   motion   ---------- //
    motionUnit: number
    motionBase: number
    motionEaseOutCirc: string
    motionEaseInOutCirc: string
    motionEaseInOut: string
    motionEaseOutBack: string
    motionEaseInBack: string
    motionEaseInQuint: string
    motionEaseOutQuint: string
    motionEaseOut: string
    //  ----------   Style   ---------- //
    wireframe: boolean
    motion: boolean
}
