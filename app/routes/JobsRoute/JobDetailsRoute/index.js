//-----------  Imports  -----------//

import filter                 from 'lodash/filter'

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import JobDetailsRoute        from './JobDetailsRoute'

import { modalActions }       from 'modules/modal/actions'

//-----------  Redux Maps  -----------//

const mapState = (state, ownProps) => {
  const { jobID } = ownProps.params

  return {
    jobID,
    job: state.jobs.data[jobID] || {},
  }
}

const mapDispatch = (dispatch) => ({
  modalActions: bindActionCreators(modalActions, dispatch)
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(JobDetailsRoute)
