//-----------  Imports  -----------//

import styled      from 'styled-components'

import { Link }    from 'react-router'

import PageWrapper from 'components/PageWrapper'

import vars        from 'styles/variables'
import mixins      from 'styles/mixins'

//-----------  Cases Route  ----------- */

const Page = styled(PageWrapper)``

const Info = styled(Link)`
  align-items     : center;
  display         : flex;
  justify-content : flex-start;

  > * {
    ${ mixins.antiAliased() }

    color: ${vars.grayDarker};
  }
`

const Avatar = styled.img`
  background    : ${vars.yellow};
  border-radius : 50%;
  box-shadow    : 2px 2px 2px rgba(0,0,0,0.08);
  height        : 2.75rem;
  margin        : -0.25rem 0;
  width         : 2.75rem;
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

export default { Page, Info, Avatar, Actions }
