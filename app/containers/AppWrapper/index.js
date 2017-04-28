//-----------  Imports  -----------//

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import AppWrapper             from './AppWrapper'

import { authActions }        from 'modules/auth/actions'
import { modalActions }       from 'modules/modal/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  auth    : state.auth,
  orders  : state.orders,
  browser : state.browser,
})

const mapDispatch = (dispatch) => ({
  authActions  : bindActionCreators(authActions, dispatch),
  modalActions : bindActionCreators(modalActions, dispatch),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(AppWrapper)
