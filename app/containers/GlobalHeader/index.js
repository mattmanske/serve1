//-----------  Imports  -----------//

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import GlobalHeader           from './GlobalHeader'

import { authActions }        from 'modules/auth/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  org          : state.org,
  auth         : state.auth,
  organization : state.organization
})

const mapDispatch = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(GlobalHeader)
