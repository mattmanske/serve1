//-----------  Imports  -----------//

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import CaseDetailsRoute       from './CaseDetailsRoute'

import { modalActions }       from 'modules/modal/actions'

//-----------  Redux Maps  -----------//

const mapState = (state, ownProps) => ({
  kase   : state.cases.data[ownProps.params.caseID] || {},
  jobs   : state.jobs.data || {},
  kaseID : ownProps.params.caseID
})

const mapDispatch = (dispatch) => ({
  modalActions: bindActionCreators(modalActions, dispatch)
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(CaseDetailsRoute)
