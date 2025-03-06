/**
 * This entry file is for esbuild plugin.
 *
 * @module
 */

import { Restructure } from './index'

/**
 * Esbuild plugin
 *
 * @example
 * ```ts
 * import { build } from 'esbuild'
 * import Restructure from 'unplugin-restructure/esbuild'
 * 
 * build({ plugins: [Restructure()] })
```
 */
const esbuild = Restructure.esbuild as typeof Restructure.esbuild
export default esbuild
export { esbuild as 'module.exports' }
