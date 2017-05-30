//-----------  Imports  -----------//

import get              from 'lodash/get'

import { connect }      from 'react-redux'

import JobForm         from './JobForm'

import { jobsActions } from 'modules/jobs/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  isLoading  : state.jobs.isLoading,
  selectedID : get(state, 'form.job.initial.id', null),
})

const mapDispatch = (dispatch) => ({
  onSubmit: (values) => {
    return new Promise((res, rej) => {
      return dispatch(jobsActions.update(values, res, rej))
    })
  }
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(JobForm)
