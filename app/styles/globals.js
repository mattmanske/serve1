//-----------  Imports  -----------//

import { injectGlobal } from 'styled-components'

import TextStyles       from 'styles/globals/text'

import vars             from 'styles/variables'

//-----------  Exports  -----------//

injectGlobal`
  *, *:after, *:before {
    box-sizing: border-box
  }

  html, body {
    height  : 100%;
    margin  : 0;
    padding : 0;
    width   : 100%;
  }

  #app {
    color      : ${vars.black};
    margin     : 0;
    min-height : 100%;
    min-width  : 100%;
    padding    : 0;
  }

  ${ TextStyles }
`
