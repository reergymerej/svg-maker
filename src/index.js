#!/usr/bin/env node

/**
 * This is the entry point.  It's job is to find the files to process, read
 * them, and write the processed results.
 */

import dir from 'node-dir'
import fs from 'fs'
import path from 'path'
import fixThisSucker from './fixer'

const inputDir = path.join(process.cwd(), 'SVGs')
const readOptions = {
  match: /.svg$/,
}

const outputDir = `${inputDir}/processed`
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir)
}

const inputFiles = dir.readFiles(inputDir, readOptions,
  (err, file, fileName, next) => {
    console.log(`\nprocessing ${fileName}...`)
    const basename = path.basename(fileName, '.svg') + '.js'
    const rewritten = fixThisSucker(file)
    const newFilePath = outputDir + '/' + basename
    fs.writeFileSync(newFilePath, rewritten)
    next()
  })
