//-----------  Imports  -----------//

import styled   from 'styled-components'

import { Link } from 'react-router'

import vars     from 'styles/variables'

//-----------  Dashboard Sidebar  ----------- */

const Sidebar = styled.aside`
  background             : linear-gradient(left, ${vars.white}, ${vars.grayLightest});
  border-right           : 1px solid ${vars.grayLighter};
  border-top-left-radius : ${vars.radius};
  flex-basis             : 15em;
  box-shadow             : inset -3px 0 3px rgba(0,0,0,0.02);

  > .ant-menu-inline {
    background   : none;
    border-right : none;
    padding-top  : 2rem;
  }
`

const Title = styled(Link)`
  color: ${vars.grayDarkest};

  i {
    color: ${vars.blueLight};
  }
`

//-----------  Exports  ----------- */

export default { Sidebar, Title }
