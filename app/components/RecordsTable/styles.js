//-----------  Imports  -----------//

import styled             from 'styled-components'

import { Table as table } from 'antd'

import vars               from 'styles/variables'

//-----------  Records Table  ----------- */

const Table = styled(table)`
  margin-top: ${vars.gutterLg};

  .ant-table-body table {
    border-spacing: 0 0.5rem;

    .centered {
      text-align: center;
    }

    .right {
      text-align: right;
    }
  }

  .ant-table-thead > tr > th {
    background : transparent;
    color      : ${vars.gray};
    padding    : 0 0.5em;
  }

  .ant-table-tbody > tr:hover > td {
    background: ${vars.blueLightest};
  }


  .ant-table-tbody > tr > td {
    background : ${vars.white};
    border-top : 1px solid rgba(0,0,0,0.02);
    box-shadow : 2px 2px 4px rgba(0,0,0,0.02);
    overflow-x : hidden;
    padding    : 0.67rem;

    a {
      color: inherit;

      &, * {
        transition: color 0.15s ease-out;
      }

      &:hover, &:hover * {
        color: ${vars.blue} !important;
      }
    }

    i {
      margin-right   : 0.25rem;
      opacity        : 0.33;
      vertical-align : -0.5px;
    }

    .sb-avatar {
      box-shadow    : 1px 1px 3px rgba(0,0,0,0.08);
      margin-bottom : -0.5rem;
      margin-top    : -0.5rem;
    }

    &:first-child {
      border-left   : 1px solid rgba(0,0,0,0.03);
      border-radius : ${vars.radius} 0 0 ${vars.radius};
      padding-left  : 1rem;
    }

    &:last-child {
      border-radius : 0 ${vars.radius} ${vars.radius} 0;
      border-right  : 2px solid rgba(0,0,0,0.06);
      padding-right : 0.5rem;

      i {
        color     : ${vars.blueLight};
        font-size : 1.25rem;
        opacity   : 1;

        &:hover {
          color: ${vars.blue};
        }
      }
    }
  }
`

//-----------  Exports  ----------- */

export default { Table }
