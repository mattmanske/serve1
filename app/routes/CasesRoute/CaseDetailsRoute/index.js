//-----------  Imports  -----------//

import pickBy                 from 'lodash/pickBy'

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import CaseDetailsRoute       from './CaseDetailsRoute'

import { modalActions }       from 'modules/modal/actions'

//-----------  Redux Maps  -----------//

const mapState = (state, ownProps) => {
  const { caseID } = ownProps.params

  return {
    caseID,
    kase : state.cases.data[caseID] || {},
    jobs : pickBy(state.jobs.data, ['case', caseID]),
  }
}

const mapDispatch = (dispatch) => ({
  modalActions: bindActionCreators(modalActions, dispatch)
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(CaseDetailsRoute)
