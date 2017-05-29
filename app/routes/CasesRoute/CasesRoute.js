//-----------  Imports  -----------//

import Route                from './styles'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'
import { Button }           from 'antd'

import CaseRollup           from './CaseRollup'

import { recordsToArray }   from 'utils/records'

//-----------  Definitions  -----------//

const title = 'Cases'

const breadcrumbs = [{
  link  : '/',
  title : 'Dashboard'
},{
  title : 'Cases'
}]

//-----------  Component  -----------//

class CasesRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { cases, clients, contacts, ...props } = this.props
    const { data, error, isWatching } = cases

    const records = recordsToArray(data)

    return (
      <Route.Page title={title} loading={!isWatching} breadcrumbs={breadcrumbs}>
        <Link to={'/cases/new'}>
          <Button size='large'>Start New Case</Button>
        </Link>

        {records.map(kase => (
          <CaseRollup
            key={kase.id}
            kase={kase}
            client={clients && clients[kase.client]}
            contact={contacts && contacts[kase.client] && contacts[kase.client][kase.contact]}
          />
        ))}
      </Route.Page>
    )
  }
}

//-----------  Prop Types  -----------//

CasesRoute.propTypes = {
  cases    : PropTypes.object.isRequired,
  clients  : PropTypes.object.isRequired,
  contacts : PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default CasesRoute
