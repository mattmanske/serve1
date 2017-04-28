//-----------  Imports  -----------//

import styled    from 'styled-components'

import { Table } from 'antd'

import vars      from 'styles/variables'

//-----------  Shows Footer  ----------- */

const Footer = styled(Table)`
  border-color : ${vars.grayLightest} !important;
  border-right : 1px solid ${vars.grayLightest};
  table-layout : fixed;

  th {
    background  : transparent !important;
    font-weight : bold;
  }

  .member-col {
    padding-bottom : 1em;
    padding-top    : 1em;
    vertical-align: top;
  }

  .ant-table-placeholder {
    display: none;
  }
`

const Cell = styled.div`
  
   small {
     color   : ${vars.black};
     display : block;;
   }
`

//-----------  Exports  ----------- */

export default { Footer, Cell }
