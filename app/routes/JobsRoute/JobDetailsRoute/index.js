//-----------  Imports  -----------//

import { connect } from 'react-redux'

import JobDetailsRoute from './JobDetailsRoute'

//-----------  Redux Maps  -----------//

const mapState = (state, ownProps) => ({
  job   : state.jobs.data[ownProps.params.jobID] || {},
  jobID : ownProps.params.jobID
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(JobDetailsRoute)
