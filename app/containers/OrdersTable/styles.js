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

    border-color   : ${vars.grayLightest} !important;
    border-left    : 1px solid ${vars.grayLightest};
    text-align     : center !important;
  }

  .ant-table-placeholder {
    border-bottom : none;
    border-left   : 1px solid ${vars.grayLightest};
    border-right  : 1px solid ${vars.grayLightest};
  }

  .ant-table-footer {
    border-radius : 0 0 4px 4px;
    overflow      : hidden;
    padding       : 0;
  }
`

const Column = styled(Table.Column)``

const Item = styled.div`
  align-items     : center;
  display         : flex;
  justify-content : space-between;
  padding         : 0.33em;
  position        : relative;

  span {
    font-size   : 0.8rem;
    line-height : 1;
    position    : relative;

    &:first-child {
      padding-right : 0.67em;
      text-align    : left;
    }

    &:last-child {
      padding-left : 0.67em;
      text-align   : right;
    }
  }

  hr {
    border     : none;
    border-top : 1px dotted ${vars.grayLighter};
    flex       : 1 0 auto;
    height     : 0;
  }
`

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

//-----------  Exports  ----------- */

export default { Wrapper, Column, Item, Footer }
