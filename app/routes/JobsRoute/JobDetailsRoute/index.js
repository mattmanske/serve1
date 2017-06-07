//-----------  Imports  -----------//

import pickBy                 from 'lodash/pickBy'

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import JobDetailsRoute        from './JobDetailsRoute'

import { modalActions }       from 'modules/modal/actions'

//-----------  Redux Maps  -----------//

const mapState = (state, ownProps) => {
  const { jobID } = ownProps.params

  return {
    jobID,
    job      : state.jobs.data[jobID] || {},
    services : pickBy(state.services.data, ['job', jobID]),
  }
}

const mapDispatch = (dispatch) => ({
  modalActions: bindActionCreators(modalActions, dispatch)
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(JobDetailsRoute)
