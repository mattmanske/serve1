//-----------  Imports  -----------//

import pickBy                 from 'lodash/pickBy'

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import ServiceDetailsRoute     from './ServiceDetailsRoute'

import { modalActions }       from 'modules/modal/actions'

//-----------  Redux Maps  -----------//

const mapState = (state, ownProps) => {
  const { serviceID } = ownProps.params

  return {
    serviceID,
    service   : state.services.data[serviceID] || {},
    jobs     : pickBy(state.jobs.data, ['service', serviceID]),
    contacts : pickBy(state.contacts.data, ['service', serviceID]),
  }
}

const mapDispatch = (dispatch) => ({
  modalActions: bindActionCreators(modalActions, dispatch)
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ServiceDetailsRoute)
