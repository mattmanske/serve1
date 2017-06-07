//-----------  Imports  -----------//

import countBy                from 'lodash/countBy'

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import JobsTable              from './JobsTable'

import { jobsActions }        from 'modules/jobs/actions'
import { modalActions }       from 'modules/modal/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  cases    : state.cases.data,
  clients  : state.clients.data,
  contacts : state.contacts.data,
  services : countBy(state.services.data, 'job')
})

const mapDispatch = (dispatch) => ({
  jobsActions  : bindActionCreators(jobsActions, dispatch),
  modalActions : bindActionCreators(modalActions, dispatch)
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(JobsTable)
