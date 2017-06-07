//-----------  Imports  -----------//

import pickBy              from 'lodash/pickBy'

import { connect }         from 'react-redux'
import { initialize }      from 'redux-form'

import ContactSelect       from './ContactSelect'

import { contactsActions } from 'modules/contacts/actions'

//-----------  Redux Maps  -----------//

const mapState = (state, ownProps) => ({
  disabled  : !ownProps.filter,
  contacts  : pickBy(state.contacts.data, ['client', ownProps.filter]),
  isLoading : state.contacts.isLoading,
})

const mapDispatch = (dispatch, ownProps) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ContactSelect)
