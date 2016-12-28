import fs from 'fs'

const makeFriendlyName = (name) => {
  return name.replace(/[^a-z0-9]/gi, '')
}

const spreadProps = (element) => {
  return element.replace('>', ' {...props}>')
}

const write = (outputDir, svg, name) => {
  const friendlyName = makeFriendlyName(name)
  const filePath = `${outputDir}/${friendlyName}.js`
  const svgWithSpreadProps = spreadProps(svg)
  const template =
`/* eslint-disable */
import React from 'react'

const ${friendlyName} = (props) =>
  ${svgWithSpreadProps}

export default ${friendlyName}
`
  console.log(`${name}.svg -> ${friendlyName}.js`)
  if (fs.existsSync(filePath)) {
    // We generated a non-unique name.  :(
    throw new Error('That dog won\'t hunt.')
  } else {
    fs.writeFileSync(filePath, template)
  }
}

export default write
