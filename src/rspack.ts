/**
 * This entry file is for Rspack plugin.
 *
 * @module
 */

import { Restructure } from './index'

/**
 * Rspack plugin
 *
 * @example
 * ```js
 * // rspack.config.js
 * import Restructure from 'unplugin-restructure/rspack'
 *
 * default export {
 *  plugins: [Restructure()],
 * }
 * ```
 */
const rspack = Restructure.rspack as typeof Restructure.rspack
export default rspack
export { rspack as 'module.exports' }
