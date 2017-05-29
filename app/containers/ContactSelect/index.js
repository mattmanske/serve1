//-----------  Imports  -----------//

import get                 from 'lodash/get'

import { connect }         from 'react-redux'

import ContactSelect       from './ContactSelect'

import { contactsActions } from 'modules/contacts/actions'

//-----------  Redux Maps  -----------//

const mapState = (state, ownProps) => ({
  contacts  : get(state.contacts, `data.${ownProps.filter || ''}`, {}),
  isLoading : state.contacts.isLoading,
})

const mapDispatch = (dispatch, ownProps) => ({
  onChange: (option) => {
    const clientID  = (option && option.clientID) || (ownProps.filter)
    const contactID = (option && option.value)

    return new Promise((res, rej) => {
      return dispatch(contactsActions.select(clientID, contactID, res, rej))
    }).then(selectedID => {
      return ownProps.afterSelect && ownProps.afterSelect(selectedID)
    })
  },
})


//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ContactSelect)
