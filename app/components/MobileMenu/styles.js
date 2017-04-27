//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'
import anim   from 'styles/animations'

//-----------  Mobile Menu  ----------- */

const Elem = styled.div`
  font-size : 1em;
`

const Menu = styled.div`
  animation        : ${props => props.active ? anim.jelly + ' 0.8s linear forwards' : ''};
  background       : ${vars.white};
  box-shadow       : 0.5em 0.5em 1.33em rgba(0, 0, 0, 0.15);
  cursor           : pointer;
  height           : ${props => props.active ? '12.5em' : '0'};
  overflow         : hidden;
  position         : absolute;
  right            : 0.67rem;
  top              : 0.67rem;
  transform-origin : 100% 0%;
  transition       : width 0.2s, height 0.2s;
  width            : ${props => props.active ? '11em' : '0'};
  z-index          : 500;

  nav {
    bottom     : 0;
    color      : ${vars.black};
    left       : 0;
    opacity    : ${props => props.active ? '1' : '0'};
    padding    : ${vars.gutter};
    position   : absolute;
    text-align : left;
    transition : ${props => props.active ? 'opacity 0.3s 0.3s' : 'unset'};
    width      : 100%;

    a {
      color       : ${vars.black};
      display     : block;
      font-size   : 1em;
      line-height : 1.15;
      margin-top  : 0.33rem;

      &:hover {
        color: ${vars.blueLight} !important;
      }
    }

    button {
      margin-top : 0.33rem;
      width      : 100%;
    }

    > *:last-child {
      margin-bottom: -0.15em;
    }
  }
`

const Trigger = styled.div`
  position    : absolute;
  right       : 1em;
  top         : 1.1em;
  user-select : none;
  z-index     : 750;

  i {
    color        : ${vars.blueLight};
    font-size    : 2.25em;
    margin-right : 0.15em;
  }
`

//-----------  Exports  ----------- */

export default { Elem, Menu, Trigger }
