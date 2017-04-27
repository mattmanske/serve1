//-----------  Imports  -----------//

import { injectGlobal } from 'styled-components'

import TextStyles       from 'styles/globals/text'
import FormStyles       from 'styles/globals/form'
import InputStyles      from 'styles/globals/inputs'
import SelectStyles     from 'styles/globals/select'
import SelectorStyles   from 'styles/globals/selectors'
import OtherStyles      from 'styles/globals/other'

import vars             from 'styles/variables'

//-----------  Exports  -----------//

injectGlobal`
  *, *:after, *:before {
    box-sizing: border-box
  }

  html, body {
    height : 100%;
    width  : 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: ${vars.bodyFont};
    font-weight: ${vars.bodyFontWeight};
  }

  #app {
    background-color : ${ vars.white };
    min-height       : 100%;
    min-width        : 100%;
  }

  ${ TextStyles }
  ${ FormStyles }
  ${ InputStyles }
  ${ SelectStyles }
  ${ SelectorStyles }
  ${ OtherStyles }
`
