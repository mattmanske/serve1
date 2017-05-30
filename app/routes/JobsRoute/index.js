//-----------  Imports  -----------//

import { connect } from 'react-redux'

import JobsRoute   from './JobsRoute'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  jobs  : state.jobs,
  cases : state.cases.data,
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(JobsRoute)
