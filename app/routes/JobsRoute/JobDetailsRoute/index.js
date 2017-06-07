//-----------  Imports  -----------//

import pickBy                 from 'lodash/pickBy'

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import JobDetailsRoute        from './JobDetailsRoute'

import { modalActions }       from 'modules/modal/actions'
import { servicesActions }    from 'modules/services/actions'

//-----------  Redux Maps  -----------//

const mapState = (state, ownProps) => {
  const { jobID } = ownProps.params
  const job = state.jobs.data[jobID] || {}

  return {
    job,
    jobID,
    kase     : job.case && state.cases.data[job.case] || {},
    client   : job.client && state.clients.data[job.client] || {},
    contact  : job.contact && state.contacts.data[job.contact] || {},
    services : pickBy(state.services.data, ['job', jobID]),
  }
}

const mapDispatch = (dispatch) => ({
  modalActions    : bindActionCreators(modalActions, dispatch),
  servicesActions : bindActionCreators(servicesActions, dispatch),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(JobDetailsRoute)
