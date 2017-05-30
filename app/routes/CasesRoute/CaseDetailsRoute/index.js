//-----------  Imports  -----------//

import { connect } from 'react-redux'

import CaseDetailsRoute from './CaseDetailsRoute'

//-----------  Redux Maps  -----------//

const mapState = (state, ownProps) => ({
  kase   : state.cases.data[ownProps.params.caseID] || {},
  kaseID : ownProps.params.caseID
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(CaseDetailsRoute)
