//-----------  Imports  -----------//

import styled    from 'styled-components'

import { Table } from 'antd'

import vars      from 'styles/variables'
import mixins    from 'styles/mixins'

//-----------  Orders Table  ----------- */

const Wrapper = styled(Table)`

  table {
    border-color : ${vars.grayLightest} !important;
    border-right : 1px solid ${vars.grayLightest};
    table-layout : fixed;
  }

  th, td {
    ${ mixins.ellipsis() }

    border-color : ${vars.grayLightest} !important;
    border-left  : 1px solid ${vars.grayLightest};
    position     : relative;
    text-align   : center !important;

    &:nth-child(5)::before {
      background     : linear-gradient(left, rgba(0,0,0,0.033), rgba(0,0,0,0));
      bottom         : 0;
      content        : '';
      left           : 0;
      pointer-events : none;
      position       : absolute;
      top            : 0;
      width          : 1em;
    }
  }

  .ant-table-footer {
    border-radius : 0 0 4px 4px;
    overflow      : hidden;
    padding       : 0;
  }
`

const Column = styled(Table.Column)``

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

const Totals = styled.div`
  small {
    color   : ${vars.black};
    display : block;

    em {
      color: ${vars.gray};
    }
  }
`

//-----------  Exports  ----------- */

export default { Wrapper, Column, Footer, Totals }
