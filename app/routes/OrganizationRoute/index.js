//-----------  Imports  -----------//

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import OrganizationRoute      from './OrganizationRoute'

import { modalActions }       from 'modules/modal/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  organization: state.organization
})

const mapDispatch = (dispatch) => ({
  modalActions : bindActionCreators(modalActions, dispatch)
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(OrganizationRoute)
