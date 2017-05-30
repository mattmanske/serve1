//-----------  Imports  -----------//

import { connect }  from 'react-redux'

import ClientsRoute from './ClientsRoute'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  clients  : state.clients,
  contacts : state.contacts.data
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ClientsRoute)
