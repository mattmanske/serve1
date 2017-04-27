//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Page Wrapper  ----------- */

const Elem = styled.main`
  opacity     : 1;
  overflow-x  : hidden;
  padding-top : ${vars.gutterLg};
  transition  : ${vars.transition};

  ${props => props.loading && `
    opacity        : 0.5;
    pointer-events : none;
  `}

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
