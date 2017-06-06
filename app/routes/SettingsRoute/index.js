//-----------  Imports  -----------//

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import SettingsRoute          from './SettingsRoute'

import { modalActions }       from 'modules/modal/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  user: state.auth.user
})

const mapDispatch = (dispatch) => ({
  modalActions : bindActionCreators(modalActions, dispatch)
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(SettingsRoute)
