//-----------  Imports  -----------//

import styled      from 'styled-components'

import PageWrapper from 'components/PageWrapper'

import vars        from 'styles/variables'

//-----------  New Case Route  ----------- */

const Page = styled(PageWrapper)``

const Content = styled.div`
  margin: ${vars.gutterLg} auto;
`

const Form = styled.form`
  margin    : 0 auto;
  max-width : ${vars.smallWidth};
`

const Title = styled.h2`
  margin-bottom : 1rem;
  text-align    : center;
`

//-----------  Exports  ----------- */

export default { Page, Content, Form, Title }
