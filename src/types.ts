export type IframeSizeKey = keyof SizeProps

export type Size = 'desktop' | 'mobile'

export type SizeProps = {
  // eslint-disable-next-line no-unused-vars
  [key in Size]: {
    width: string | number
    height: string | number
  }
}
