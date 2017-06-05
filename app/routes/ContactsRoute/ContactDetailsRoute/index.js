//-----------  Imports  -----------//

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import ContactDetailsRoute    from './ContactDetailsRoute'

import { modalActions }       from 'modules/modal/actions'

//-----------  Redux Maps  -----------//

const mapState = (state, ownProps) => {
  const { contactID } = ownProps.params

  const contact = state.contacts.data[contactID] || {}
  const client  = state.clients.data[contact.client] || {}

  return { client, contact, contactID }
}

const mapDispatch = (dispatch) => ({
  modalActions: bindActionCreators(modalActions, dispatch)
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ContactDetailsRoute)
