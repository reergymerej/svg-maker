#!/usr/bin/env node

/**
 * This is the entry point.  It's job is to find the files to process, read
 * them, and write the processed results.
 */

import dir from 'node-dir'
import fs from 'fs'
import path from 'path'
import fixThisSucker from './fixer'
import write from './file-writer'

const inputDir = process.cwd()
const readOptions = {
  match: /.svg$/,
}

const outputDir = `${inputDir}/svg-components`
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir)
}

const inputFiles = dir.readFiles(inputDir, readOptions,
  (err, file, fileName, next) => {
    // console.log(`\nprocessing ${fileName}...`)
    const basename = path.basename(fileName, '.svg')
    const cleanedSvg = fixThisSucker(file)
    write(outputDir , cleanedSvg, basename)
    next()
  })
