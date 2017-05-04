//-----------  Imports  -----------//

import styled      from 'styled-components'

import PageWrapper from 'components/PageWrapper'

import vars        from 'styles/variables'
import mixins      from 'styles/mixins'

//-----------  Shows Route  ----------- */

const Page = styled(PageWrapper)``

const Header = styled.header`
  align-items     : center;
  display         : flex;
  justify-content : space-between;
  margin-bottom   : ${vars.gutter};

  > *:first-child {
    display : inline-block;
    flex    : 0 1 auto;
  }
`

//-----------  Exports  ----------- */

export default { Page, Header }
