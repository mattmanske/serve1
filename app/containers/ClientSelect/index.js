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
  onChange: (option) => {
    return new Promise((res, rej) => {
      return dispatch(clientsActions.select((option && option.value), res, rej))
    }).then(clientID => {
      return ownProps.afterSelect && ownProps.afterSelect(clientID)
    })
  },
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ClientSelect)
