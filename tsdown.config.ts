import { defineConfig } from 'tsdown'
import Raw from 'unplugin-raw/rolldown'

export default defineConfig({
  entry: ['./src/*.ts'],
  format: 'esm',
  target: 'node18.12',
  clean: true,
  dts: { transformer: 'oxc' },
  plugins: [Raw()],
})
