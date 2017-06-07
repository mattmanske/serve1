//-----------  Imports  -----------//

import styled             from 'styled-components'

import * as avatar        from 'react-avatar'
import { Link as link }   from 'react-router'
import { Icon,
         Input,
         Badge,
         Button,
         Popover,
         Table as table } from 'antd'

import vars               from 'styles/variables'
import mixins             from 'styles/mixins'

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
    background     : transparent;
    color          : ${vars.gray};
    padding-bottom : 0;
    padding-top    : 0;
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
    }

    &.avatar-col {
      width: 4rem;
    }

    &.actions-col {
      width: 3rem;
    }
  }
`

const A = styled.a`
  color: inherit;
`

const Link = styled(link)`
  color: inherit;

  &, * {
    transition: color 0.15s ease-out;
  }

  &:hover, &:hover * {
    color: ${vars.blue} !important;
  }

  h5 {
    font-weight: bold;
  }
`

const Small = styled.small`
  font-style : italic;
  color      : ${vars.grayLight};
`

const Address = styled.address`
  font-style: normal;
`

const Avatar = styled(avatar)`
  margin-right   : -0.5rem;
  vertical-align : middle;
`

const Status = styled(Badge)`
  .ant-badge-status-text {
    color      : ${vars.gray} !important;
    font-size  : 0.67rem;
    font-style : italic;
  }
`

const PopMenu = styled(Popover)``

const PopIcon = styled(Icon)`
  color     : ${vars.blue};
  cursor    : pointer;
  font-size : 1.25rem;
  opacity   : 1 !important;
`

const Stacked = styled.div`
  > * {
    ${ mixins.antiAliased() }

    display: block;
  }
`

const Add = styled(Button).attrs({
  size : 'small',
  type : 'dashed',
  icon : 'paper-clip'
})`
  ${ mixins.antiAliased() }

  color: ${vars.gray};
`

const Actions = styled.nav`
  padding: 0.25em;

  > * {
    color   : ${vars.grayDark};
    display : block;

    i {
      color        : ${vars.blueLight};
      margin-left  : -${vars.gutterSm};
      margin-right : ${vars.gutterSm};
    }

    & + * {
      margin-top: ${vars.gutterSm};
    }
  }
`

const Empty = styled.div`
  padding    : ${vars.gutterLg} 0;
  text-align : center;

  h5 {
    color       : ${vars.gray};
    font-weight : normal;
    margin      : ${vars.gutter} auto;
    max-width   : 14rem;
  }
`
//-----------  Exports  ----------- */

export default { Table, Link, A, Small, Avatar, Address, Status, PopMenu, PopIcon, Stacked, Add, Actions, Empty }
