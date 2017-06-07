//-----------  Imports  -----------//

import pickBy                 from 'lodash/pickBy'

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import ServiceDetailsRoute    from './ServiceDetailsRoute'

import { modalActions }       from 'modules/modal/actions'

//-----------  Redux Maps  -----------//

const mapState = (state, ownProps) => {
  const { jobID, serviceID } = ownProps.params

  return {
    jobID,
    serviceID,
    job      : state.jobs.data[jobID] || {},
    service  : state.services.data[serviceID] || {},
  }
}

const mapDispatch = (dispatch) => ({
  modalActions: bindActionCreators(modalActions, dispatch)
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ServiceDetailsRoute)
