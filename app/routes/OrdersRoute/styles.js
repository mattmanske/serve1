//-----------  Imports  -----------//

import styled      from 'styled-components'

import PageWrapper from 'components/PageWrapper'

import vars        from 'styles/variables'
import mixins      from 'styles/mixins'

//-----------  Shows Route  ----------- */

const Page = styled(PageWrapper)`

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

  .data-col {
    text-align: left !important;
  }

  .ant-table-footer {
    border-radius : 0 0 4px 4px;
    overflow      : hidden;
    padding       : 0;
  }
`

const Header = styled.header`
  align-items     : center;
  display         : flex;
  justify-content : space-between;
  margin-bottom   : ${vars.gutter};

  > *:last-child {
    align-items     : center;
    display         : flex;
    flex            : 1 1 auto;
    justify-content : flex-end;

    > * {
      margin-left: 1em;
    }
  }
`

const OrderItem = styled.div`
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

//-----------  Exports  ----------- */

export default { Page, Header, OrderItem }
