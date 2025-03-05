export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface VariantColorResolverResult {
    background: string
    hover: string
    color: string
    border: string
    hoverColor?: string
}

export interface ConfigTheme {}

// need replace partial to deepPartial use type-fest
export type ConfigThemeOverrides = Partial<ConfigTheme>
