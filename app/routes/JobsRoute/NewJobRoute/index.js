//-----------  Imports  -----------//

import { connect }  from 'react-redux'
import { destroy }  from 'redux-form'

import NewJobRoute from './NewJobRoute'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  isLoading: (state.cases.isLoading)
})

const mapDispatch = (dispatch) => ({
  resetForms: () => {
    dispatch(destroy('job'))
    dispatch(destroy('case'))
    dispatch(destroy('client'))
    dispatch(destroy('contact'))
  }
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(NewJobRoute)
