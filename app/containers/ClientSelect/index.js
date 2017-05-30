//-----------  Imports  -----------//

import { connect }        from 'react-redux'

import ClientSelect       from './ClientSelect'

import { clientsActions } from 'modules/clients/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  clients   : state.clients.data,
  isLoading : state.clients.isLoading,
})

const mapDispatch = (dispatch, ownProps) => ({
  onSelect: (clientID, option) => {
    return new Promise((res, rej) => {
      return dispatch(clientsActions.select(clientID, res, rej))
    }).then(selectedID => {
      return ownProps.afterSelect && ownProps.afterSelect(selectedID)
    })
  },
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ClientSelect)
