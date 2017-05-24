//-----------  Imports  -----------//

import styled, { keyframes } from 'styled-components'

import vars                  from 'styles/variables'
import mixins                from 'styles/mixins'

//-----------  Animations  ----------- */

const fadeIn = keyframes`
  0% {
    opacity: 0;
  } 100% {
    opacity: 1;
  }
`

const foldCubeAngle = keyframes`
  0%, 10% {
    opacity   : 0;
    transform : perspective(140px) rotateX(-180deg);
  } 25%, 75% {
    opacity   : 1;
    transform : perspective(140px) rotateX(0deg);
  } 90%, 100% {
    opacity   : 0;
    transform : perspective(140px) rotateY(180deg);
  }
`

//-----------  Loading Screen  ----------- */

const Screen = styled.div`
  background     : linear-gradient(${vars.white}, ${vars.grayLightest});
  height         : 100vh;
  left           : 0;
  opacity        : ${p => p.visible ? 1 : 0};
  pointer-events : none;
  position       : fixed;
  top            : 0;
  transition     : all 0.5s ease-out, width 0, height 0;
  width          : 100vw;
  z-index        : 999999;
`

const Center = styled.div`
  ${ mixins.centerAlign() }

  animation  : ${fadeIn} 1s 1 linear both;
  text-align : center;
`

const Spinner = styled.div`
  height    : 2.5rem;
  margin    : 2.5rem auto;
  position  : relative;
  transform : rotateZ(45deg);
  width     : 2.5rem;
`

const Cube = styled.div`
  float     : left;
  height    : 50%;
  position  : relative;
  transform : ${p => `scale(1.1) rotateZ(${p.index * 90}deg)`};
  width     : 50%;

  &::before {
    animation        : ${foldCubeAngle} 2.4s infinite linear both;
    animation-delay  : ${p => `${p.index * 0.3}s`};
    box-shadow       : inset ${vars.shadow};
    background-color : ${vars.blueLight};
    content          : '';
    height           : 100%;
    left             : 0;
    position         : absolute;
    top              : 0;
    transform-origin : 100% 100%;
    width            : 100%;
  }
`

const Message = styled.p`
  color      : ${vars.black};
  max-width  : ${vars.smallWidth};
  text-align : center;
`

//-----------  Exports  ----------- */

export default { Screen, Center, Spinner, Cube, Message }
