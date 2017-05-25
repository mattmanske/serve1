//-----------  Imports  -----------//

import { connect }  from 'react-redux'

import ClientSelect from './ClientSelect'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  clients   : state.clients.data,
  isLoading : state.clients.isLoading,
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ClientSelect)
