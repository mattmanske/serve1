//-----------  Imports  -----------//

import Route                from './styles'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'
import { Button }           from 'antd'

import ClientRollup         from './ClientRollup'

import { recordsToArray }   from 'utils/records'

//-----------  Definitions  -----------//

const title = 'Clients'

const breadcrumbs = [{
  link  : '/',
  title : 'Dashboard'
},{
  title : 'Clients'
}]

//-----------  Component  -----------//

class ClientsRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { clients, contacts, ...props } = this.props
    const { data, error, isWatching } = clients

    const records = recordsToArray(data)

    return (
      <Route.Page title={title} loading={!isWatching} breadcrumbs={breadcrumbs}>
        <Link to={'/clients/new'}>
          <Button size='large'>Add New Client</Button>
        </Link>

        {records.map((client, index) => (
          <ClientRollup
            key={index}
            client={client}
            contacts={contacts && contacts[client.id]}
          />
        ))}
      </Route.Page>
    )
  }
}

//-----------  Prop Types  -----------//

ClientsRoute.propTypes = {
  clients  : PropTypes.object.isRequired,
  contacts : PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default ClientsRoute
