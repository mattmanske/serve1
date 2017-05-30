//-----------  Imports  -----------//

import Case                 from './styles'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

class ClientRollup extends React.Component {

  state = {
    expanded: false
  }

  render(){
    const { client, contacts, ...props } = this.props

    return (
      <Case.Rollup>
        <Case.Details>
          <Case.Title to={`/clients/${client.id}`}>
            <em>{client.id}</em> {client.name}
          </Case.Title>
        </Case.Details>
      </Case.Rollup>
    )
  }
}

//-----------  Prop Types  -----------//

ClientRollup.propTypes = {
  client   : PropTypes.object,
  contacts : PropTypes.object,
}

//-----------  Export  -----------//

export default ClientRollup
