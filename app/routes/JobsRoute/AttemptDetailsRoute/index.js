//-----------  Imports  -----------//

import pickBy                 from 'lodash/pickBy'

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import AttemptDetailsRoute    from './AttemptDetailsRoute'

import { modalActions }       from 'modules/modal/actions'

//-----------  Redux Maps  -----------//

const mapState = (state, ownProps) => {
  const { jobID, attemptID } = ownProps.params

  return {
    jobID,
    attemptID,
    job      : state.jobs.data[jobID] || {},
    attempt  : state.attempts.data[attemptID] || {},
  }
}

const mapDispatch = (dispatch) => ({
  modalActions: bindActionCreators(modalActions, dispatch)
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(AttemptDetailsRoute)
