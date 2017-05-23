//-----------  Imports  -----------//

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import AppWrapper             from './AppWrapper'

import { authActions }        from 'modules/auth/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  org     : state.org,
  auth    : state.auth,
  browser : state.browser,
})

const mapDispatch = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(AppWrapper)
