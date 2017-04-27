//-----------  Imports  -----------//

import styled      from 'styled-components'

import PageWrapper from 'components/PageWrapper'

import vars        from 'styles/variables'
import mixins      from 'styles/mixins'

//-----------  Shows Route  ----------- */

const Page = styled(PageWrapper)`

  th, td {
    border-left : 1px solid ${vars.grayLightest};
    text-align  : center !important;
  }

  td.venue-col {
    text-align: left !important;

    strong {
      ${ mixins.ellipsis() }

      display: block;
    }
  }
`

const Header = styled.header`
  align-items     : center;nter;
  display         : flex;
  justify-content : space-between;
  margin-bottom   : ${vars.gutter};

  > *:first-child {
    flex: 1 0 auto;
  }

  > h4, > i {
    flex       : 1 1 100%;
    padding    : 0 1rem;
    text-align : left;
  }
`

//-----------  Exports  ----------- */

export default { Page, Header }
