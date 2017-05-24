//-----------  Imports  -----------//

import { bindActionCreators }  from 'redux'
import { connect }             from 'react-redux'

import AppWrapper              from './AppWrapper'

import { authActions }         from 'modules/auth/actions'
import { organizationActions } from 'modules/organization/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  org          : state.org,
  auth         : state.auth,
  browser      : state.browser,
  organization : state.organization
})

const mapDispatch = (dispatch) => ({
  authActions         : bindActionCreators(authActions, dispatch),
  organizationActions : bindActionCreators(organizationActions, dispatch),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(AppWrapper)
