//-----------  Imports  -----------//

import { connect }     from 'react-redux'
import { initialize }  from 'redux-form'

import JobSelect       from './JobSelect'

import { jobsActions } from 'modules/jobs/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  jobs      : state.jobs.data,
  isLoading : state.jobs.isLoading,
})

const mapDispatch = (dispatch, ownProps) => ({
  onChange: (jobID, option) => {
    if (!jobID) return dispatch(initialize('job', {}))

    return new Promise((res, rej) => {
      return dispatch(jobsActions.select(jobID, res, rej))
    }).then(jobID => {
      return ownProps.afterSelect && ownProps.afterSelect(jobID)
    })
  },
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(JobSelect)
