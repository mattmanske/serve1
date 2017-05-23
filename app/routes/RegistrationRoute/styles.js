//-----------  Imports  -----------//

import styled      from 'styled-components'

import PageWrapper from 'components/PageWrapper'

import vars        from 'styles/variables'

//-----------  Registration Route  ----------- */

const Page = styled(PageWrapper)`
  p {
    margin     : 0 auto ${vars.gutterLg};
    max-width  : ${vars.smallWidth};
    text-align : center;
  }
`

const Login = styled.div``

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

const Avatar = styled.div`
  background          : ${vars.white};
  background-image    : ${p => `url(${p.src})`};
  background-position : center center;
  background-size     : cover;
  border-radius       : 50%;
  box-shadow          : ${vars.shadow};
  height              : 10em;
  margin              : 1em auto;
  width               : 10em;
`

//-----------  Exports  ----------- */

export default { Page, Login, Split, Form, User, Avatar }
