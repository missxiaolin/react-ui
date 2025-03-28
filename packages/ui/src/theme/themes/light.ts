import { getColor } from '../utils'

export default function derivative() {
    return {
        paddingXxs: '4px',
        paddingXs: '8px',
        paddingSm: '12px',
        padding: '16px',
        paddingMd: '20px',
        paddingLg: '24px',
        paddingXl: '32px',
        colorWhite: '#fff',
        colorBlack: '#1c2128',
        colorFinish: '#409eff',
        overlayBackgroundColor: 'rgba(0, 0, 0, 0.2)',
        textEllipsisLineHeight: 1.6,
        activeOpacity: 0.6,
        textColorPrimary: '#333740',
        textColorRegular: '#5d626d',
        textColorSecondary: '#a1a6b2',
        textColorPlaceholder: '#c0c4cc',
        borderColorBase: '#e9ecf1',
        borderColorLight: '#e4e7ed',
        borderColorLighter: '#ebeef5',
        borderColorExtraLight: '#f2f6fc',
        fillColorBase: '#f0f2f5',
        fillColorLight: '#f5f7fa',
        fillColorLighter: '#fafafa',
        fillColorExtraLight: '#fafcff',
        fillColorDark: '#ebedf0',
        fillColorDarker: '#e6e8eb',
        fillColorBlank: '#ffffff',
        backgroundColorBase: '#f5f6f9',
        bgColorBase: '#f5f6f9',
        bgColor: '#f5f7fa',
        borderWidthBase: '1px',
        borderStyleBase: 'solid',
        borderColorHover: '#c0c4cc',
        borderBase: 'var(--l-border-width-base) var(--l-border-style-base) var(--l-border-color-base)',
        borderRadiusBase: '6px',
        borderRadiusSmall: '3px',
        borderRadiusRound: '20px',
        borderRadiusCircle: '100%',
        boxShadowBase: '0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04)',
        boxShadowLight: '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
        svgMonochromeGrey: '#dcdde0',
        fillBase: 'var(--l-color-white)',
        fontSizeExtraLarge: '20px',
        lineHeightExtraLarge: '28px',
        fontSizeLarge: '18px',
        lineHeightLarge: '26px',
        fontSizeMedium: '16px',
        lineHeightMedium: '24px',
        fontSizeBase: '14px',
        lineHeightBase: '20px',
        fontSizeSmall: '13px',
        lineHeightSmall: '19px',
        fontSizeExtraSmall: '12px',
        lineHeightExtraSmall: '18px',
        textUnderline: 'underline',
        fontWeightPrimary: '500',
        fontLineHeightPrimary: '24px',
        fontColorDisabledBase: '#bbb',
        indexNormal: 1,
        indexTop: 1000,
        indexPopper: 2000,
        disabledFillBase: 'var(--l-background-color-base)',
        disabledColorBase: 'var(--l-text-color-placeholder)',
        disabledBorderBase: 'var(--l-border-color-light)',
        textColorYellow: '#ffc300',
        textColorRed: '#ff7329',
        textColorGreen: '#3edf06',
        textColorDark: '#1c2128',
        textColorTips: '#d5dae4',
        textColorTipsBorder: '#e9ecf1',
        borderColorPrimary: '#29c1c2',
        borderColorSuccess: '#21b455',
        borderColorWarning: '#ff9c00',
        borderColorDanger: '#f56c6c',
        borderColorError: '#f56c6c',
        borderColorInfo: '#b3b5bb',
        borderColorGary: '#eef0f4',
        borderColorFinish: '#409eff',
        borderRadiusMedium: '10px',
        statusColorPrimary: '#29c1c2',
        statusColorDanger: '#fb1b1b',
        statusColorWarning: '#ff9c00',
        statusColorDefault: '#eef0f4',
        statusColorFinish: '#a1a6b2',
        statusColorDark: '#24343b',
        disabledBgColor: 'var(--l-bg-color)',
        disabledTextColor: 'var(--l-text-color-placeholder)',
        disabledBorderColor: 'var(--l-border-color-light)',
        transitionDuration: '0.3s',
        transitionDurationFast: '0.2s',
        transitionFunctionEaseInOutBezier: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        transitionFunctionFastBezier: 'cubic-bezier(0.23, 1, 0.32, 1)',
        transitionAll: 'all var(--l-transition-duration) var(--l-transition-function-ease-in-out-bezier)',
        transitionFade: 'opacity var(--l-transition-duration) var(--l-transition-function-fast-bezier)',
        transitionMdFade:
            'transform var(--l-transition-duration) var(--l-transition-function-fast-bezier), opacity var(--l-transition-duration) var(--l-transition-function-fast-bezier)',
        transitionFadeLinear: 'opacity var(--l-transition-duration-fast)linear',
        transitionBorder: 'border-color var(--l-transition-duration-fast) var(--l-transition-function-ease-in-out-bezier)',
        transitionColor: 'color var(--l-transition-duration-fast) var(--l-transition-function-ease-in-out-bezier)',
        // color
        ...getColor('colorPrimary', [
            '#29c1c2',
            '#3ec7c8',
            '#54cdce',
            '#69d4d4',
            '#7fdada',
            '#94e0e1',
            '#a9e6e7',
            '#bfeced',
            '#d4f3f3',
            '#eaf9f9'
        ]),
        ...getColor('colorSuccess', ['#21b455', '#64cb88', '#90daaa', '#bce9cc', '#d3f0dd', '#e9f8ee']),
        ...getColor('colorWarning', ['#ff9c00', '#ffba4d', '#ffce80', '#ffe1b3', '#ffebcc', '#fff5e6']),
        ...getColor('colorDanger', ['#f56c6c', '#f89898', '#fab6b6', '#fcd3d3', '#fde2e2', '#fef0f0']),
        ...getColor('colorError', ['#f56c6c', '#f89898', '#fab6b6', '#fcd3d3', '#fde2e2', '#fef0f0']),
        ...getColor('colorInfo', ['#b3b5bb', '#cacbcf', '#d9dadd', '#e8e9eb', '#f0f0f1', '#f7f8f8']),
        ...getColor('colorGary', ['#eef0f4', '#f3f5f7', '#f7f8fa', '#fafbfc', '#fcfcfd', '#fdfefe'])
    }
}
