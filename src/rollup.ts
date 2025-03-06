/**
 * This entry file is for Rollup plugin.
 *
 * @module
 */

import { Restructure } from './index'

/**
 * Rollup plugin
 *
 * @example
 * ```ts
 * // rollup.config.js
 * import Restructure from 'unplugin-restructure/rollup'
 *
 * export default {
 *   plugins: [Restructure()],
 * }
 * ```
 */
const rollup = Restructure.rollup as typeof Restructure.rollup
export default rollup
export { rollup as 'module.exports' }
