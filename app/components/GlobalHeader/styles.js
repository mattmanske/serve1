//-----------  Imports  -----------//

import styled  from 'styled-components'

import vars    from 'styles/variables'
import mixins  from 'styles/mixins'

//-----------  Global Header  ----------- */

const Elem = styled.header`
  background : transparent;
  font-size  : 1em;
  position   : relative;
  width      : 100%;
  z-index    : 100;

  > div {
    align-items     : center;
    display         : flex;
    justify-content : space-between;
    min-height      : 4.683em;
    padding         : ${vars.gutterSm} ${vars.gutter};
  }
`

const Logo = styled.div`
  flex     : 0 0 auto;
  position : relative;
  z-index  : 10;
`

const Root = styled.a`
  position: absolute;
`

const Nav = styled.div`
  flex       : 0 0 auto;
  text-align : right;

  a {
    ${ mixins.antiAliased() }

    border-bottom  : 1px solid transparent;
    color          : ${vars.white};
    margin-right   : 1.5rem;
    text-shadow    : 0 0 1rem grba(0,0,0,0);
    text-transform : uppercase;
    transition     : all ${vars.transition};

    button {
      border         : none;
      border-radius  : 5em;
      color          : ${vars.blue};
      text-transform : uppercase;
      margin-left: -2px;
      margin-right: -2px;
    }

    &:hover {
      border-bottom-color : ${vars.white};
      color               : ${vars.white} !important;
      text-shadow         : 0 0 1rem rgba(0,0,0,0.15);
    }
  }
`

//-----------  Exports  ----------- */

export default { Elem, Logo, Root, Nav }
