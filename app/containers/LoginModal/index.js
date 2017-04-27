//-----------  Imports  -----------//

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import LoginModal             from './LoginModal'

import { authActions }        from 'modules/auth/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  auth: state.auth
})

const mapDispatch = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(LoginModal)
