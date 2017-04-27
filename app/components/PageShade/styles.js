//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Page Shade  ----------- */

const Elem = styled.div`
  background     : rgba(0, 0, 0, 0.5);
  height         : 100vh;
  left           : 0;
  opacity        : ${props => props.active ? '1' : '0'};
  pointer-events : ${props => props.active ? 'all' : 'none'};
  position       : fixed;
  top            : 0;
  transform      : ${props => props.active ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 0, 0)'};
  transition     : ${props => props.active ? 'opacity 0.2s' : 'opacity 0.2s, transform 0s 0.2s'};
  width          : 100vw;
  z-index        : 250;
`

//-----------  Exports  ----------- */

export default { Elem }
