import cheerio from 'cheerio'
import {fixAttribute} from './attribute-fixer'


const removeXmlAndComments = ($) => {
  console.log('removing xml junk...')
  $.root().contents().filter(function () {
    return this.type !== 'tag'
  }).remove()
  return $
}

const removeStyles = ($) => {
  const styles = $('style')
  if (styles.length) {
    console.log('Whoops!  Removing styles...  Make sure you add them with CSS.')
    styles.remove()
  }
  return $
}
const eachAttribute = ($node, fn) => {
  Object.keys($node.attr()).map(fn)
}

const removeSillyTags = ($) => {
  console.log('removing those silly attributes...')
  const svg = $('svg')
  eachAttribute(svg, (attr) => {
    if (attr !== 'viewbox') {
      svg.removeAttr(attr)
    }
  })
  return $
}

const removeCrap = ($) => {
  $ = removeXmlAndComments($)
  $ = removeStyles($)
  $ = removeSillyTags($)
  return $
}

const reactify = ($) => {
  console.log('converting attributes to React-friendly versions...')
  const allNodes = $('*')
  allNodes.each(function () {
    const $this = $(this)
    eachAttribute($this, (attr) => {
      fixAttribute($this, attr)
    })
  })
  return $
}

const stringify = ($) => {
  return $.html()
}

const fixThisSucker = (junk) => {
  // parse as html
  const parserOptions = {}
  const $ = cheerio.load(junk)

  // remove all the crap we don't want
  const cleaned = removeCrap($)
  const reactified = reactify(cleaned)

  // stringify
  return stringify($)
}

export default fixThisSucker
