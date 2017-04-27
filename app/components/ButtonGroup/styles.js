//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'
import mixins from 'styles/mixins'

//-----------  Button Group  ----------- */

const Elem = styled.div`
  border-radius : 10em;
  display       : inline-block;
  transition    : ${vars.transition};
  white-space   : nowrap;

  > button {
    border-radius : 0;
    box-shadow    : none;

    &:hover {
      box-shadow: none;
    }

    & + button::after {
      ${ mixins.verticalAlign() }

      background : rgba(255, 255, 255, 0.5);
      content    : '';
      height     : 110%;
      left       : -2px;
      width      : 1px;
    }

    &:first-child {
      border-radius: ${vars.radius} 0 0 ${vars.radius};
      border-right-width: 1px;
    }

    &:last-child {
      border-radius: 0 ${vars.radius} ${vars.radius} 0;
      border-left-width: 1px;
    }
  }
`

//-----------  Exports  ----------- */

export default { Elem }
