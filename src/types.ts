export const MissingSlug = Symbol('MissingSlug')

export type UrlState = string | typeof MissingSlug

export type IframeSizeKey = keyof SizeProps

export type Size = 'desktop' | 'mobile'

export type SizeProps = {
  // eslint-disable-next-line no-unused-vars
  [key in Size]: {
    width: string | number
    height: string | number
  }
}

export type SetError = (error: unknown) => void
