//-----------  Imports  -----------//

import pickBy                 from 'lodash/pickBy'

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import ClientDetailsRoute     from './ClientDetailsRoute'

import { modalActions }       from 'modules/modal/actions'

//-----------  Redux Maps  -----------//

const mapState = (state, ownProps) => {
  const { clientID } = ownProps.params

  return {
    clientID,
    client   : state.clients.data[clientID] || {},
    jobs     : pickBy(state.jobs.data, ['client', clientID]),
    contacts : pickBy(state.contacts.data, ['client', clientID]),
  }
}

const mapDispatch = (dispatch) => ({
  modalActions: bindActionCreators(modalActions, dispatch)
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ClientDetailsRoute)
