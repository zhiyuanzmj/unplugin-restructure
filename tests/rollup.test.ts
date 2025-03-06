import path from 'node:path'
import { rollupBuild, testFixtures } from '@sxzz/test-utils'
import { RollupVueJsx } from '@vue-macros/test-utils'
import { describe } from 'vitest'
import Starter from '../src/rollup'

describe('rollup', async () => {
  const { dirname } = import.meta
  await testFixtures(
    '*.tsx',
    async (args, id) => {
      const { snapshot } = await rollupBuild(id, [
        RollupVueJsx() as any,
        Starter(),
      ])
      return snapshot
    },
    { cwd: path.resolve(dirname, 'fixtures'), promise: true },
  )
})
