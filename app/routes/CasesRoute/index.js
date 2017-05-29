//-----------  Imports  -----------//

import { connect } from 'react-redux'

import CasesRoute from './CasesRoute'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  cases    : state.cases,
  clients  : state.clients.data,
  contacts : state.contacts.data
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(CasesRoute)
