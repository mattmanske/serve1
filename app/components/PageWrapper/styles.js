//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'
import mixins from 'styles/mixins'

//-----------  Page Wrapper  ----------- */

const Wrapper = styled.div`
  color          : ${vars.black};
  display        : flex;
  flex           : 1 0 auto;
  flex-direction : column;
  overflow       : scroll;
  transition     : ${vars.transition};
`

const Header = styled.header`
  border-bottom : 1px solid rgba(0,0,0,0.04);
  box-shadow    : 0 3px 3px rgba(0,0,0,0.02);
  flex          : 0 0 auto;
  padding       : ${vars.gutterSm} ${vars.gutter};
  position      : relative;
  z-index: 10;

  .ant-breadcrumb-link {
    line-height: 160%;
  }
`

const Strong = styled.span`
  ${ mixins.antiAliased() }

  color: ${vars.grayLight};
`

const Main = styled.main`
  background : linear-gradient(${vars.white} 0%, ${vars.grayLightest} 50%);
  flex       : 1 0 auto;
  opacity    : 1;
  overflow   : srcoll;
  padding    : ${vars.gutterLg};
  position   : relative;

  ${props => props.loading && `
    opacity        : 0.5;
    pointer-events : none;
  `}
`

//-----------  Exports  ----------- */

export default { Wrapper, Header, Strong, Main }
