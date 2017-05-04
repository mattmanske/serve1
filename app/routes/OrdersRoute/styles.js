//-----------  Imports  -----------//

import styled      from 'styled-components'

import PageWrapper from 'components/PageWrapper'

import vars        from 'styles/variables'

//-----------  Shows Route  ----------- */

const Page = styled(PageWrapper)``

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

//-----------  Exports  ----------- */

export default { Page, Header }
