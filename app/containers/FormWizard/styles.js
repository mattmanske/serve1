//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Form Wizard  ----------- */

const Wizard = styled.div``

const Content = styled.div`
  margin   : ${vars.gutterLg} auto;
  position : relative;
  width    : 100%;

  &::after,
  &::before {
    bottom     : 0;
    content    : '';
    position   : absolute;
    top        : 0;
    width      : 10%;
    z-index    : 100;
  }

  &::after {
    background : linear-gradient(right, rgba(255,255,255,1), rgba(255,255,255,0))
    right      : 0;
  }

  &::before {
    background : linear-gradient(left, rgba(255,255,255,1), rgba(255,255,255,0))
    left       : 0;
  }

  .swap-left-leave,
  .swap-right-leave {
    opacity    : 1;
    position   : relative;
    transform  : translate3d(0, 0, 0);
    transition : transform 0.5s ease-in, opacity 0.5s ease-in;
    z-index    : 20;
  }
  .swap-left-leave-active {
    opacity   : 0;
    transform : translate3d(-100%, 0, 0);
  }
  .swap-right-leave-active {
    opacity   : 0;
    transform : translate3d(100%, 0, 0);
  }

  .swap-left-enter,
  .swap-right-enter {
    opacity    : 0;
    position   : absolute;
    transition : left 0.5s ease-out, opacity 0.5s ease-out;
    z-index    : 10;
  }
  .swap-left-enter {
    left: 100%;
  }
  .swap-right-enter {
    left: -100%;
  }
  .swap-left-enter-active,
  .swap-right-enter-active {
    opacity : 1;
    left    : 0;
  }

  .swap-left-height,
  .swap-right-height {
    height: 100vh !important
  }
`

const Transition = styled.div`
  width: 100%;
`

//-----------  Exports  ----------- */

export default { Wizard, Content, Transition }
