//-----------  Imports  -----------//

import vars   from 'styles/variables'
import mixins from 'styles/mixins'

//-----------  Exports  -----------//

export default `
  h1, h2, h3, h4, h5, h6 {
    font-family : ${vars.headerFont};
    font-size   : ${vars.headerFontWeight};
    margin      : 0 auto;
  }

  h1 {
    font-size: 2.441em;
  }

  h2 {
    font-size: 1.953em;
  }

  h3 {
    font-size: 1.563em;
  }

  h4 {
    font-size: 1.25em;
  }

  h5 {
    font-size: 1em;
  }

  h6 {
    font-size: 0.8em;
  }

  a {
    color           : inherit;
    cursor          : pointer;
    text-decoration : none;
    transition      : ${vars.transition};

    &:hover, &.active {
      color: ${vars.orangeLight} !important;
    }

    &:disabled {
      pointer-events: none;
    }
  }

  p {
    ${ mixins.antiAliased() }

    letter-spacing : 0.015em;
    line-height    : 1.67;

    a {
      color           : ${vars.orange};
      text-decoration : underline;
    }
  }

  small {
    color          : ${vars.grayDark};
    font-size      : 0.8em;
    letter-spacing : -0.02em;

    a {
      color           : ${vars.orange};
      text-decoration : underline;
    }
  }
`
