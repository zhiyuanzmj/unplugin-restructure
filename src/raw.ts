import { createFilter, normalizePath } from 'unplugin-utils'
import { transformRestructure } from './core'
import {
  helperPrefix,
  withDefaultsHelperCode,
  withDefaultsHelperId,
} from './core/helper'
import { resolveOptions, type Options } from './core/options'
import type { UnpluginFactory } from 'unplugin'

export * from './core/options'

export const plugin: UnpluginFactory<Options | undefined, false> = (
  rawOptions = {},
) => {
  const options = resolveOptions(rawOptions)
  const filter = createFilter(options.include, options.exclude)

  const name = 'unplugin-restructure'
  return {
    name,
    enforce: options.enforce,

    resolveId(id) {
      if (normalizePath(id).startsWith(helperPrefix)) return id
    },
    loadInclude(id) {
      return normalizePath(id).startsWith(helperPrefix)
    },
    load(_id) {
      const id = normalizePath(_id)
      if (id === withDefaultsHelperId) return withDefaultsHelperCode
    },

    transformInclude(id) {
      return filter(id)
    },
    transform: (code, id) => transformRestructure(code, id, options),
  }
}
