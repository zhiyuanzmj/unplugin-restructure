# unplugin-restructure [![npm](https://img.shields.io/npm/v/unplugin-restructure.svg)](https://npmjs.com/package/unplugin-restructure)

[![Unit Test](https://github.com/zhiyuanzmj/unplugin-restructure/actions/workflows/unit-test.yml/badge.svg)](https://github.com/zhiyuanzmj/unplugin-restructure/actions/workflows/unit-test.yml)

## Installation

```bash
npm i -D unplugin-restructure
```

### Usage

Only functions that start with `/* @restructure */` will be transfromed.

```tsx
/* @restructure */ function App({ foo, bar: [baz] }){
  return {
    foo,
    baz
  }
}

// convert to

function App(__MACROS_props){
  return {
    foo: __MACROS_props.foo,
    baz: __MACROS_props.bar[0]
  }
}
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import Restructure from 'unplugin-restructure/vite'

export default defineConfig({
  plugins: [Restructure()],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import Restructure from 'unplugin-restructure/rollup'

export default {
  plugins: [Restructure()],
}
```

<br></details>

<details>
<summary>Rolldown</summary><br>

```ts
// rolldown.config.js
import Restructure from 'unplugin-restructure/rolldown'

export default {
  plugins: [Restructure()],
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
import { build } from 'esbuild'
import Restructure from 'unplugin-restructure/esbuild'

build({
  plugins: [Restructure()],
})
```

<br></details>

<details>
<summary>Webpack</summary><br>

```js
// webpack.config.js
import Restructure from 'unplugin-restructure/webpack'

export default {
  /* ... */
  plugins: [Restructure()],
}
```

<br></details>

<details>
<summary>Rspack</summary><br>

```ts
// rspack.config.js
import Restructure from 'unplugin-restructure/rspack'

export default {
  /* ... */
  plugins: [Restructure()],
}
```

<br></details>

## License

[MIT](./LICENSE) License © 2025-PRESENT [zhiyuanzmj](https://github.com/zhiyuanzmj)
