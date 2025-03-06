/**
 * This entry file is for Farm plugin.
 *
 * @module
 */

import { Restructure } from './index'

/**
 * Farm plugin
 *
 * @example
 * ```ts
 * // farm.config.js
 * import Restructure from 'unplugin-restructure/farm'
 *
 * export default {
 *   plugins: [Restructure()],
 * }
 * ```
 */
const farm = Restructure.farm as typeof Restructure.farm
export default farm
export { farm as 'module.exports' }
