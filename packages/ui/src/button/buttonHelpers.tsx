const _ButtonHTMLTypes = ['submit', 'button', 'reset'] as const
export type ButtonHTMLType = (typeof _ButtonHTMLTypes)[number]
