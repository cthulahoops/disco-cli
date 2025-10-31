#!/usr/bin/env node

import {execute} from '@oclif/core'
import {readFileSync} from 'node:fs'
import {fileURLToPath} from 'node:url'
import {dirname, join} from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Read package.json at compile time
const packageJson = JSON.parse(
  readFileSync(join(__dirname, 'package.json'), 'utf-8')
)

await execute({
  dir: import.meta.url,
  pjson: packageJson
})
