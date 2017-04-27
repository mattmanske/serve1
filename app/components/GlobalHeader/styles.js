//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'
import mixins from 'styles/mixins'

//-----------  Global Header  ----------- */

const Elem = styled.header`
  background : ${vars.white};
  box-shadow : ${vars.shadow};
  font-size  : 1em;
  position   : relative;
  width      : 100%;
  z-index    : 100;

  > div {
    align-items     : center;
    display         : flex;
    justify-content : space-between;
    min-height      : 4.683em;
    padding         : ${vars.gutterSm};
  }
`

const Logo = styled.div`
  flex     : 0 0 auto;
  position : relative;
  z-index  : 10;
`

const Nav = styled.div`
  flex       : 0 0 auto;
  text-align : right;

  a {
    ${ mixins.antiAliased() }

    color          : ${vars.grayDark};
    font-size      : 0.85em;
    margin-right   : 1.5rem;
    text-transform : uppercase;

    &:hover {
      color: ${vars.blueLight} !important;
    }
  }
`

//-----------  Exports  ----------- */

export default { Elem, Logo, Nav }
