//-----------  Imports  -----------//

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'
import { push }               from 'react-router-redux'

import ContactsRoute          from './ContactsRoute'

import { modalActions }       from 'modules/modal/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  contacts: state.contacts,
})

const mapDispatch = (dispatch) => ({
  redirectTo   : (route) => dispatch(push(route)),
  modalActions : bindActionCreators(modalActions, dispatch)
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ContactsRoute)
