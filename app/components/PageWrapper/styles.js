//-----------  Imports  -----------//

import styled from 'styled-components'

//-----------  Page Wrapper  ----------- */

const Elem = styled.main`
  overflow-x: hidden;

  ${props => props.fill && `
    align-content   : stretch;
    align-items     : stretch;
    display         : flex;
    flex-direction  : column;
    justify-content : flex-start;

    > .bounds-wrapper {
      flex  : 0 0 auto;
      width : 100%;
    }
  `}

  .bounds-wrapper + .bounds-wrapper {
    padding-top: 0;
  }
`

//-----------  Exports  ----------- */

export default { Elem }
