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

const mapDispatch = (dispatch, ownProps) => ({
  onChange: (clientID, option) => {
    if (!clientID) return dispatch(initialize('client', {}))

    return new Promise((res, rej) => {
      return dispatch(clientsActions.select(clientID, res, rej))
    }).then(clientID => {
      return ownProps.afterSelect && ownProps.afterSelect(clientID)
    })
  },
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ClientSelect)
