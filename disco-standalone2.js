#!/usr/bin/env node

import {run, flush} from '@oclif/core'

// Override process.cwd to return a stable path
const originalCwd = process.cwd
process.cwd = () => '/home/user/disco-cli'

try {
  await run(process.argv.slice(2), import.meta.url)
  await flush()
} catch (error) {
  console.error(error)
  process.exit(1)
}
