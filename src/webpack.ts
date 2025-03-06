/**
 * This entry file is for webpack plugin.
 *
 * @module
 */

import { Restructure } from './index'

/**
 * Webpack plugin
 *
 * @example
 * ```js
 * // webpack.config.js
 * import Restructure from 'unplugin-restructure/webpack'
 *
 * default export {
 *  plugins: [Restructure()],
 * }
 * ```
 */
const webpack = Restructure.webpack as typeof Restructure.webpack
export default webpack
export { webpack as 'module.exports' }
