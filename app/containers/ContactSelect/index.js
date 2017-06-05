//-----------  Imports  -----------//

import get                 from 'lodash/get'

import { connect }         from 'react-redux'
import { initialize }      from 'redux-form'

import ContactSelect       from './ContactSelect'

import { contactsActions } from 'modules/contacts/actions'

//-----------  Redux Maps  -----------//

const mapState = (state, ownProps) => ({
  contacts  : get(state.contacts, `data.${ownProps.filter || ''}`, {}),
  isLoading : state.contacts.isLoading,
})

const mapDispatch = (dispatch, ownProps) => ({
  onChange: (contactID, option) => {
    if (ownProps.onChange) ownProps.onChange(contactID)

    if (!contactID) return dispatch(initialize('contact', {}))

    return new Promise((res, rej) => {
      return dispatch(contactsActions.select(contactID, res, rej))
    }).then(contactID => {
      return ownProps.afterSelect && ownProps.afterSelect(contactID)
    })
  },
})


//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ContactSelect)
