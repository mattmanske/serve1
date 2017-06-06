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

const mapDispatch = (dispatch, ownProps) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(JobSelect)
