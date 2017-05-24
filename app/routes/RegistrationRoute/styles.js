//-----------  Imports  -----------//

import styled      from 'styled-components'

import PageWrapper from 'components/PageWrapper'

import vars        from 'styles/variables'

//-----------  Registration Route  ----------- */

const Page = styled(PageWrapper)``

const Split = styled.div`
  align-items     : center;
  display         : flex;
  justify-content : center;

  > *:first-child {
    border-right : 1px solid rgba(255, 255, 255, 0.33);
    flex         : 0 1 15em;
    padding      : ${vars.gutterLg};
    padding-left : 0;
  }

  > *:last-child {
    flex         : 1 1 auto;1 1 auto;
    padding-left : ${vars.gutter};
  }
`

const Form = styled.form`
  label {
    color: ${vars.white} !important;
  }

  input {
    color: ${vars.black};
  }
`

const User = styled.aside``

//-----------  Exports  ----------- */

export default { Page, Split, Form, User }
