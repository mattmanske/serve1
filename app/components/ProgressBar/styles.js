//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Bounds Wrapping  -----------//

const Elem = styled.div`
  left       : 0;
  opacity    : ${(props) => props.hidden ? '0' : '1'};
  position   : fixed;
  top        : 0;
  transition : all 500ms ease-in-out;
  visibility : ${(props) => props.hidden ? 'hidden' : 'visible'};
  width      : 100%;
  z-index    : ${(props) => props.hidden ? '-10' : '9999'};
`

const Percent = styled.div`
  background : ${vars.blueLight};
  height     : 2px;
  transition : all 300ms ease;
`

//-----------  Exports  ----------- */

export default { Elem, Percent }
