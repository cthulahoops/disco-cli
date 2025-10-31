#!/usr/bin/env node

import {execute} from '@oclif/core'

// Embed package.json inline to avoid runtime file system lookups
const packageJson = {
  "name": "disco",
  "description": "deploy and manage your web projects",
  "version": "0.5.49",
  "author": "The Disco Team",
  "bin": {
    "disco": "./bin/run.js"
  },
  "bugs": "https://github.com/letsdiscodev/cli/issues",
  "dependencies": {
    "@inquirer/prompts": "^7.4.0",
    "@oclif/core": "^4",
    "@oclif/plugin-autocomplete": "^3.1.2",
    "@oclif/plugin-help": "^6",
    "@oclif/plugin-plugins": "^5",
    "@oclif/plugin-update": "^4",
    "@types/inquirer": "^9.0.7",
    "chalk": "^5.3.0",
    "cli-progress": "^3.12.0",
    "cliui": "^8.0.1",
    "compare-versions": "^6.1.1",
    "detect-port": "^2.1.0",
    "eventsource": "^3.0.6",
    "node-fetch": "^3.3.2",
    "node-fetch-native": "^1.6.6",
    "node-ssh": "^13.2.0",
    "open": "^10.1.0",
    "tunnel-ssh": "^5.1.2",
    "undici": "^7.7.0"
  },
  "engines": {
    "node": ">=18.0.0"
  },
  "homepage": "https://github.com/letsdiscodev/cli",
  "keywords": [
    "oclif"
  ],
  "license": "MIT",
  "main": "dist/index.js",
  "type": "module",
  "oclif": {
    "bin": "disco",
    "dirname": "disco",
    "commands": "./dist/commands",
    "plugins": [
      "@oclif/plugin-autocomplete",
      "@oclif/plugin-help",
      "@oclif/plugin-plugins",
      "@oclif/plugin-update"
    ],
    "topicSeparator": ":",
    "topics": {
      "apikeys": {
        "description": "list and remove api keys"
      },
      "deploy": {
        "description": "manage deployments and see deployment output"
      },
      "discos": {
        "description": "manage discos"
      },
      "env": {
        "description": "read, set and remove environment variables"
      },
      "github": {
        "description": "manage your github apps"
      },
      "invite": {
        "description": "create and accept invites to manage a server"
      },
      "meta": {
        "description": "get and set meta information"
      },
      "postgres": {
        "description": "manage postgres databases"
      },
      "postgres:addon": {
        "description": "manage postgres addons"
      },
      "postgres:databases": {
        "description": "manage postgres databases"
      },
      "postgres:instances": {
        "description": "manage postgres instances"
      },
      "projects": {
        "description": "add, list, move and remove projects"
      },
      "syslog": {
        "description": "add, list and remove log destinations"
      },
      "volumes": {
        "description": "list, import and export volume data"
      }
    },
    "macos": {
      "identifier": "dev.letsdisco.cli"
    },
    "update": {
      "disableNpmLookup": true,
      "s3": {
        "bucket": "disco-cli-assets",
        "host": "https://cli-assets.letsdisco.dev/"
      }
    }
  },
  "repository": "letsdiscodev/cli"
}

await execute({
  dir: import.meta.url,
  pjson: packageJson
})
