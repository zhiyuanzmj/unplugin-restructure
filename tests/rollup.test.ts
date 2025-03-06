import path from 'node:path'
import { rollupBuild, RollupVueJsx, testFixtures } from '@vue-macros/test-utils'
import { describe } from 'vitest'
import Restructure from '../src/rollup'

describe('restructure', async () => {
  const { dirname } = import.meta
  await testFixtures(
    '*.tsx',
    (args, id) => rollupBuild(id, [RollupVueJsx(), Restructure() as any]),
    { cwd: path.resolve(dirname, 'fixtures'), promise: true },
  )
})

describe('restructure unwrapRef', async () => {
  const { dirname } = import.meta
  await testFixtures(
    '*.tsx',
    (args, id) =>
      rollupBuild(id, [
        RollupVueJsx(),
        Restructure({
          unwrapRef: true,
        }) as any,
      ]),
    { cwd: path.resolve(dirname, 'fixtures'), promise: true },
  )
})
