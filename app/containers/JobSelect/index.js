//-----------  Imports  -----------//

import { connect }      from 'react-redux'

import JobSelect       from './JobSelect'

import { jobsActions } from 'modules/jobs/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  jobs     : state.jobs.data,
  isLoading : state.jobs.isLoading,
})

const mapDispatch = (dispatch, ownProps) => ({
  onChange: (option) => {
    const jobID = (option && option.value)

    return new Promise((res, rej) => {
      return dispatch(jobsActions.select(jobID, res, rej))
    }).then(selectedID => {
      return ownProps.afterSelect && ownProps.afterSelect(selectedID)
    })
  },
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(JobSelect)
