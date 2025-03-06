/**
 * This entry file is for Vite plugin.
 *
 * @module
 */

import { Restructure } from './index'

/**
 * Vite plugin
 *
 * @example
 * ```ts
 * // vite.config.ts
 * import Restructure from 'unplugin-restructure/vite'
 *
 * export default defineConfig({
 *   plugins: [Restructure()],
 * })
 * ```
 */
const vite = Restructure.vite as typeof Restructure.vite
export default vite
export { vite as 'module.exports' }
