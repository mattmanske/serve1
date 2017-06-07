//-----------  Imports  -----------//

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'
import { push }               from 'react-router-redux'

import ServicesRoute          from './ServicesRoute'

import { modalActions }       from 'modules/modal/actions'

//-----------  Redux Maps  -----------//

const mapState = (state, ownProps) => {
  const { jobID } = ownProps.params

  return {
    jobID,
    job       : state.jobs.data[jobID] || {},
    isLoading : (state.jobs.isLoading || state.services.isLoading)
  }
}

const mapDispatch = (dispatch) => ({
  redirectTo   : (route) => dispatch(push(route)),
  modalActions : bindActionCreators(modalActions, dispatch)
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ServicesRoute)
