//-----------  Imports  -----------//

import styled      from 'styled-components'

import { Link }    from 'react-router'

import PageWrapper from 'components/PageWrapper'

import vars        from 'styles/variables'

//-----------  Cases Route  ----------- */

const Page = styled(PageWrapper)``

const Rollup = styled.div`
  padding: ${vars.gutter} 0;

  & + div {
    border-top: 1px dotted ${vars.grayLightest}
  }
`

const Details = styled.div``

const Title = styled(Link)``

const Associations = styled.div``

const Contact = styled(Link)``

const Client = styled(Link)``

//-----------  Exports  ----------- */

export default { Page, Rollup, Details, Title, Associations, Contact, Client }
