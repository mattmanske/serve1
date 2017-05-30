//-----------  Imports  -----------//

import styled             from 'styled-components'

import { Table as table } from 'antd'

import PageWrapper        from 'components/PageWrapper'

import vars               from 'styles/variables'

//-----------  Case Details Route  ----------- */

const Page = styled(PageWrapper)`
  display         : flex;
  justify-content : space-between;
`

const Details = styled.div`
  flex: 1 1 auto;
`

const Contacts = styled.div`
  flex: 0 0 50%;
`

const Table = styled(table)`
  .ant-table {
    border: none;
  }

  .ant-table-footer {
    background : none;
    text-align : right;
  }
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

//-----------  Exports  ----------- */

export default { Page, Details, Contacts, Table, Actions }
