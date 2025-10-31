#!/bin/bash
# Create a build directory with all necessary files
mkdir -p build
cp -r dist build/
cp package.json build/
cp oclif.manifest.json build/ 2>/dev/null || true

# Create entry point that sets proper root
cat > build/entry.js << 'ENTRY'
#!/usr/bin/env node
import {execute} from '@oclif/core'
import {fileURLToPath} from 'node:url'
import {dirname, join} from 'node:path'
import {readFileSync} from 'node:fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const pjson = JSON.parse(readFileSync(join(__dirname, 'package.json'), 'utf-8'))

await execute({
  dir: __dirname,
  development: false,
  pjson: pjson
})
ENTRY

/root/.deno/bin/deno compile --allow-all --node-modules-dir --unsafely-ignore-certificate-errors --no-check --output=disco-compiled build/entry.js

