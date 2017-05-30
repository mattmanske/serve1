//-----------  Imports  -----------//

import Route                from './styles'

import React, { PropTypes } from 'react'

import ContactsTable        from './ContactsTable'

import { recordsToArray }   from 'utils/records'

//-----------  Definitions  -----------//

const title = 'Client Details'

let breadcrumbs = [{
  link  : '/',
  title : 'Dashboard'
},{
  link  : '/clients',
  title : 'Clients'
}]

//-----------  Component  -----------//

class ClientDetailsRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { client, contacts, clientID, modalActions, ...props } = this.props
    const crumb = { title: client ? client.name : '...' }

    const records = recordsToArray(contacts)

    return (
      <Route.Page title={title} loading={!client} breadcrumbs={[ ...breadcrumbs, crumb ]}>
        <Route.Details>
          <h1>{client.name}</h1>
          <h5>{clientID}</h5>
        </Route.Details>

        <Route.Contacts>
          <ContactsTable
            clientID={clientID}
            contacts={records}
            modalActions={modalActions}
          />
        </Route.Contacts>
      </Route.Page>
    )
  }
}

//-----------  Prop Types  -----------//

ClientDetailsRoute.propTypes = {
  client       : PropTypes.object.isRequired,
  contacts     : PropTypes.object.isRequired,
  clientID     : PropTypes.string.isRequired,
  modalActions : PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default ClientDetailsRoute
