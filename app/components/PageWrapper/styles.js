//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Page Wrapper  ----------- */

const Wrapper = styled.div``

const Header = styled.header`
  border-bottom : 1px solid ${vars.grayLightest};
  padding       : ${vars.gutterSm} ${vars.gutter};
  position      : relative;
  box-shadow    : 0 3px 3px rgba(0,0,0,0.02);

  .ant-breadcrumb-link {
    line-height: 160%;
  }
`

const Main = styled.main`
  opacity    : 1;
  overflow   : srcoll;
  padding    : ${vars.gutterLg};
  position   : relative;
  transition : ${vars.transition};

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

export default { Wrapper, Header, Main }
