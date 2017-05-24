//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'
import mixins from 'styles/mixins'

//-----------  Button Group  ----------- */

const Modal = styled.div`
  text-align: center;

  button {
    box-shadow : ${vars.shadow};
    display    : block;
    width      : 100%;
    padding: ${vars.gutter};

    img {
      margin-right   : 0.33em;
      vertical-align : -0.2em;
    }
  }
`

const Unauthorized = styled.span`
  background    : ${vars.red};
  border-radius : ${vars.radius};
  color         : ${vars.white};
  display       : block;
  margin-bottom : ${vars.gutterLg};
  padding       : ${vars.gutter};
  text-align    : center;
`

//-----------  Exports  ----------- */

export default { Modal, Unauthorized }
