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
  $.root().contents().filter(function () {
    return this.type !== 'tag'
  }).remove()
  return $
}

const removeStyles = ($) => {
  $('style').remove()
  return $
}



const removeCrap = ($) => {
  $ = removeXmlAndComments($)
  $ = removeStyles($)
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

  // stringify
  return stringify($)
}

export default fixThisSucker
