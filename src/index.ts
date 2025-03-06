import { createUnplugin, type UnpluginInstance } from 'unplugin'
import { plugin, type Options } from './raw'

export * from './core/options'

export const Restructure: UnpluginInstance<Options | undefined, false> =
  createUnplugin(plugin)
