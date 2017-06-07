//-----------  Imports  -----------//

import get                from 'lodash/get'

import { connect }        from 'react-redux'
import { initialize }     from 'redux-form'

import ClientForm         from './ClientForm'

import { clientsActions } from 'modules/clients/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  isLoading  : state.clients.isLoading,
  selectedID : get(state, 'form.client.initial.id', null),
})

const mapDispatch = (dispatch) => ({
  onSelect: (clientID, option) => {
    if (!clientID) return dispatch(initialize('client', {}))

    return new Promise((res, rej) => {
      return dispatch(casesActions.select(clientID, res, rej))
    }).then(client => {
      return ownProps.onSubmitSuccess && ownProps.onSubmitSuccess(client)
    })
  },
  onSubmit: (values) => {
    return new Promise((res, rej) => {
      return dispatch(clientsActions.update(values, res, rej))
    })
  },
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ClientForm)
