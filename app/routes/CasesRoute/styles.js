//-----------  Imports  -----------//

import styled      from 'styled-components'

import { Link }    from 'react-router'
import { Card }    from 'antd'

import PageWrapper from 'components/PageWrapper'

import vars        from 'styles/variables'

//-----------  Cases Route  ----------- */

const Page = styled(PageWrapper)``

const Rollup = styled(Card)`
  margin-top: ${vars.gutter};
`

const Details = styled.div``

const Title = styled(Link)``

const Associations = styled.div``

const Contact = styled.a``

const Client = styled(Link)``

//-----------  Exports  ----------- */

export default { Page, Rollup, Details, Title, Associations, Contact, Client }
