//-----------  Imports  -----------//

import get                   from 'lodash/get'

import { formValueSelector } from 'redux-form'
import { connect }           from 'react-redux'

import ContactForm           from './ContactForm'

import { contactsActions }   from 'modules/contacts/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  filter     : formValueSelector('contact')(state, 'client'),
  isLoading  : state.contacts.isLoading,
  selectedID : get(state, 'form.contact.initial.id', null),
})

const mapDispatch = (dispatch) => ({
  onSubmit: (values) => {
    return new Promise((res, rej) => {
      return dispatch(contactsActions.update(values, res, rej))
    })
  }
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ContactForm)
