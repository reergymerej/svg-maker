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
`import React from 'react'

export default const ${friendlyName} = (props) =>
  ${svgWithSpreadProps}
`
  console.log(`writing ${name} to ${friendlyName}`)
  // TODO: make sure we are not overwriting
  fs.writeFileSync(filePath, template)
}

export default write
