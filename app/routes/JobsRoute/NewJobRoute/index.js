//-----------  Imports  -----------//

import { connect }  from 'react-redux'

import NewJobRoute from './NewJobRoute'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  isLoading: (state.cases.isLoading)
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(NewJobRoute)
