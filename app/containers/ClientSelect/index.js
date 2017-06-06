//-----------  Imports  -----------//

import { connect }        from 'react-redux'
import { initialize }     from 'redux-form'

import ClientSelect       from './ClientSelect'

import { clientsActions } from 'modules/clients/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  clients   : state.clients.data,
  isLoading : state.clients.isLoading,
})

const mapDispatch = (dispatch, ownProps) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ClientSelect)
