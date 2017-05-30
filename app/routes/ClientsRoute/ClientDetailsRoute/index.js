//-----------  Imports  -----------//

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import ClientDetailsRoute     from './ClientDetailsRoute'

import { modalActions }       from 'modules/modal/actions'

//-----------  Redux Maps  -----------//

const mapState = (state, ownProps) => ({
  client   : state.clients.data[ownProps.params.clientID] || {},
  contacts : state.contacts.data[ownProps.params.clientID] || {},
  clientID : ownProps.params.clientID,
})

const mapDispatch = (dispatch) => ({
  modalActions: bindActionCreators(modalActions, dispatch)
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ClientDetailsRoute)
