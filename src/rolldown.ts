/**
 * This entry file is for Rolldown plugin.
 *
 * @module
 */

import { Restructure } from './index'

/**
 * Rolldown plugin
 *
 * @example
 * ```ts
 * // rolldown.config.js
 * import Restructure from 'unplugin-restructure/rolldown'
 *
 * export default {
 *   plugins: [Restructure()],
 * }
 * ```
 */
const rolldown = Restructure.rolldown as typeof Restructure.rolldown
export default rolldown
export { rolldown as 'module.exports' }
