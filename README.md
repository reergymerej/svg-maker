# svg-maker

Did you use Sketch to generate SVGs?  Cool!  Want to use them as font icons in a
React app?  :(

This will help you get started.  It reads a directory of SVGs and converts them
to stateless React components.  Attributes are converted to the [supported SVG
attributes] or removed.  Nodes that make React unhappy are removed.

*Disclaimer: This is basically an experiment.  If it is of any use, I will build on this and
make it better.  If you are not completely satisfied, please contact me for a
full refund.  Better yet, submit a PR.*

## install

`npm i -g svg-maker`

## usage

1. cd into a directory of `.svg` files
1. run `svg-maker`
3. look for a directory named `svg-components`

## example

**(input) ./Article Section Incomplete.svg**
```html
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 3.8.3 (29802) - http://www.bohemiancoding.com/sketch -->
    <title>Article Section Incomplete</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <circle id="path-1" cx="12" cy="12" r="12"></circle>
        <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="24" height="24" fill="white">
            <use xlink:href="#path-1"></use>
        </mask>
    </defs>
    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Article-Section-Incomplete">
            <use id="Oval-95" stroke="#2A2A2A" mask="url(#mask-2)" stroke-width="4" xlink:href="#path-1"></use>
            <path d="M12.9655775,6.85714286 C12.0604347,6.85714286 11.6078632,7.57714286 11.6078632,8.13257143 C11.5872918,8.74971429 11.9575775,9.14057143 12.6158632,9.14057143 C13.3975775,9.14057143 13.994149,8.52342857 13.994149,7.84457143 C13.994149,7.30971429 13.6444347,6.85714286 12.9655775,6.85714286 L12.9655775,6.85714286 Z M10.8467204,17.1428571 C11.3815775,17.1428571 12.8010061,16.6285714 14.0764347,15.312 L13.7678632,14.9005714 C13.2535775,15.312 12.7187204,15.5177143 12.554149,15.5177143 C12.4307204,15.5177143 12.3690061,15.3531429 12.4924347,14.8594286 L13.2124347,12.1234286 C13.4798632,11.1154286 13.3975775,10.4571429 12.842149,10.4571429 C12.1838632,10.4571429 10.6615775,11.1154286 9.3450061,12.2468571 L9.61243467,12.6994286 C10.0444347,12.4114286 10.7438632,12.1234286 10.9084347,12.1234286 C11.0318632,12.1234286 11.0112918,12.288 10.9084347,12.6994286 L10.2912918,15.312 C9.90043467,16.7931429 10.2912918,17.1428571 10.8467204,17.1428571 L10.8467204,17.1428571 Z" id="ℹ-3" fill="#2A2A2A"></path>
        </g>
    </g>
</svg>
```

**(output) ./svg-components/ArticleSectionIncomplete.js**
```js
/* eslint-disable */
import React from 'react'

const ArticleSectionIncomplete = (props) =>
  <svg viewBox="0 0 24 24" {...props}><title/><desc/><defs><circle cx="12" cy="12" r="12"/><mask x="0" y="0" fill="white"><use xlinkHref="#path-1"/></mask></defs><g stroke="none" fill="none" strokeWidth="1" fillRule="evenodd"><g><use stroke="#2A2A2A" mask="url(#mask-2)" strokeWidth="4" xlinkHref="#path-1"/><path d="M12.9655775,6.85714286 C12.0604347,6.85714286 11.6078632,7.57714286 11.6078632,8.13257143 C11.5872918,8.74971429 11.9575775,9.14057143 12.6158632,9.14057143 C13.3975775,9.14057143 13.994149,8.52342857 13.994149,7.84457143 C13.994149,7.30971429 13.6444347,6.85714286 12.9655775,6.85714286 L12.9655775,6.85714286 Z M10.8467204,17.1428571 C11.3815775,17.1428571 12.8010061,16.6285714 14.0764347,15.312 L13.7678632,14.9005714 C13.2535775,15.312 12.7187204,15.5177143 12.554149,15.5177143 C12.4307204,15.5177143 12.3690061,15.3531429 12.4924347,14.8594286 L13.2124347,12.1234286 C13.4798632,11.1154286 13.3975775,10.4571429 12.842149,10.4571429 C12.1838632,10.4571429 10.6615775,11.1154286 9.3450061,12.2468571 L9.61243467,12.6994286 C10.0444347,12.4114286 10.7438632,12.1234286 10.9084347,12.1234286 C11.0318632,12.1234286 11.0112918,12.288 10.9084347,12.6994286 L10.2912918,15.312 C9.90043467,16.7931429 10.2912918,17.1428571 10.8467204,17.1428571 L10.8467204,17.1428571 Z" fill="#2A2A2A"/></g></g></svg>

export default ArticleSectionIncomplete
```

## coming soon

* set default size based on relative font-size
* optionally remove inline styles you'd rather control with css
* other nifty-ness







---
kickstarted by [npm-boom][npm-boom]

[npm-boom]: https://github.com/reergymerej/npm-boom
[supported svg attributes]: https://facebook.github.io/react/docs/dom-elements.html#all-supported-svg-attributes
