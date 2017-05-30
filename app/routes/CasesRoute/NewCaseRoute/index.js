//-----------  Imports  -----------//

import { connect }  from 'react-redux'
import { destroy }  from 'redux-form'

import NewCaseRoute from './NewCaseRoute'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  isLoading: (state.clients.isLoading || state.contacts.isLoading)
})

const mapDispatch = (dispatch) => ({
  resetForms: () => {
    dispatch(destroy('case'))
    dispatch(destroy('client'))
    dispatch(destroy('contact'))
  }
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(NewCaseRoute)
