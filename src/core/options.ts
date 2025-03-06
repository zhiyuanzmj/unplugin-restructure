import type { FilterPattern } from 'unplugin-utils'

export type Prop = {
  path: string
  name: string
  value: string
  defaultValue?: string
  isRest?: boolean
  isRequired?: boolean
}

export interface Options {
  include?: FilterPattern
  exclude?: FilterPattern
  enforce?: 'pre' | 'post' | undefined
  unwrapRef?: boolean
}

type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U

export type OptionsResolved = Overwrite<
  Required<Options>,
  Pick<Options, 'enforce' | 'unwrapRef'>
> & {
  generateRestProps?: (
    restPropsName: string,
    index: number,
    list: Prop[],
  ) => string | undefined
}

export function resolveOptions(options: Options): OptionsResolved {
  return {
    ...options,
    include: options.include || [/\.[cm]?[jt]sx?$/],
    exclude: options.exclude || [/node_modules/],
    enforce: 'enforce' in options ? options.enforce : 'post',
  }
}
