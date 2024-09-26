import fs from 'node:fs'
import { collections } from '@iconify/collections/index.js'

fs.writeFileSync(
  'src/collections.ts',
  `export const defaultCollections = ${JSON.stringify(Object.keys(collections).sort((a, b) => b.length - a.length), null, 2)}\n`,
  'utf-8',
)
