//-----------  Imports  -----------//

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import CasesTable             from './CasesTable'

import { modalActions }       from 'modules/modal/actions'
import { casesActions }       from 'modules/cases/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  clients  : state.clients.data,
  contacts : state.contacts.data
})

const mapDispatch = (dispatch) => ({
  casesActions : bindActionCreators(casesActions, dispatch),
  modalActions : bindActionCreators(modalActions, dispatch)
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(CasesTable)
