# unplugin-restructure [![npm](https://img.shields.io/npm/v/unplugin-restructure.svg)](https://npmjs.com/package/unplugin-restructure)

[![Unit Test](https://github.com/zhiyuanzmj/unplugin-restructure/actions/workflows/unit-test.yml/badge.svg)](https://github.com/zhiyuanzmj/unplugin-restructure/actions/workflows/unit-test.yml)

## Installation

```bash
npm i -D unplugin-restructure
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import Starter from 'unplugin-restructure/vite'

export default defineConfig({
  plugins: [Starter()],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import Starter from 'unplugin-restructure/rollup'

export default {
  plugins: [Starter()],
}
```

<br></details>

<details>
<summary>Rolldown</summary><br>

```ts
// rolldown.config.js
import Starter from 'unplugin-restructure/rolldown'

export default {
  plugins: [Starter()],
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
import { build } from 'esbuild'
import Starter from 'unplugin-restructure/esbuild'

build({
  plugins: [Starter()],
})
```

<br></details>

<details>
<summary>Webpack</summary><br>

```js
// webpack.config.js
import Starter from 'unplugin-restructure/webpack'

export default {
  /* ... */
  plugins: [Starter()],
}
```

<br></details>

<details>
<summary>Rspack</summary><br>

```ts
// rspack.config.js
import Starter from 'unplugin-restructure/rspack'

export default {
  /* ... */
  plugins: [Starter()],
}
```

<br></details>

## License

[MIT](./LICENSE) License © 2025-PRESENT [zhiyuanzmj](https://github.com/zhiyuanzmj)
