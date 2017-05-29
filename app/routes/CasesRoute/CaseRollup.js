//-----------  Imports  -----------//

import Case                 from './styles'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

class CaseRollup extends React.Component {

  state = {
    expanded: false
  }

  render(){
    const { kase, client, contact, ...props } = this.props

    const contactName = contact ? `${contact.first_name} ${contact.last_name}` : '...'
    const clientName  = client ? `${client.id} ${client.name}` : '...'

    return (
      <Case.Rollup>
        <Case.Details>
          <Case.Title to={`/cases/${kase.id}`}>
            Case #: {kase.id}
          </Case.Title>
          <Case.Associations>
            <Case.Contact to={`/clients/${kase.client}/contact/${kase.contact}`}>
              {contactName}
            </Case.Contact>
            <Case.Client to={`/clients/${kase.client}`}>
              {client ? (
                <span>{client.id} {client.name}</span>
              ) : ('...')}
            </Case.Client>
          </Case.Associations>
        </Case.Details>
      </Case.Rollup>
    )
  }
}

//-----------  Prop Types  -----------//

CaseRollup.propTypes = {
  kase    : PropTypes.object.isRequired,
  client  : PropTypes.object,
  contact : PropTypes.object,
}

//-----------  Export  -----------//

export default CaseRollup
