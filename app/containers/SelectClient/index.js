//-----------  Imports  -----------//

import { connect }  from 'react-redux'

import SelectClient from './SelectClient'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  clients   : state.clients.data,
  isLoading : state.clients.isLoading,
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(SelectClient)
