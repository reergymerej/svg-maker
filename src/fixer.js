import cheerio from 'cheerio'


const removeComments = ($) => {

  console.log($('svg').html())

  /*
  $.contents().filter(function () {
    return this.nodeType === 8
  }).remove()
  */
  return $
}

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
    console.log('Whoops!  Removing styles...')
    styles.remove()
  }
  return $
}

const removeSillyTags = ($) => {
  console.log('removing those silly attributes...')
  const svg = $('svg')
  const attr = Object.keys(svg.attr()).map(attr => {
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
  // class => className
  // etc.
  return $
}

const stringify = ($) => {
  return $.html()
}

const fixThisSucker = (junk) => {
  // parse as html
  const parserOptions = {
  }
  const $ = cheerio.load(junk)
  // remove all the crap we don't want

  const cleaned = removeCrap($)

  const reactified = reactify(cleaned)

  // stringify
  return stringify($)
}

export default fixThisSucker
