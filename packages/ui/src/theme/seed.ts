import { PresetColorType } from './interface/presetColors'
import { SeedToken } from './interface/seeds'

export const defaultPresetColors: PresetColorType = {
    blue: '#1677FF',
    purple: '#722ED1',
    cyan: '#13C2C2',
    green: '#52C41A',
    magenta: '#EB2F96',
    /**
     * @deprecated Use magenta instead
     */
    pink: '#EB2F96',
    red: '#F5222D',
    orange: '#FA8C16',
    yellow: '#FADB14',
    volcano: '#FA541C',
    geekblue: '#2F54EB',
    gold: '#FAAD14',
    lime: '#A0D911'
}

const seedToken: SeedToken = {
    // preset color palettes
    ...defaultPresetColors, // color
    // Font
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
    fontSize: 14
}

export default seedToken
