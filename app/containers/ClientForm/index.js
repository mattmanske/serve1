//-----------  Imports  -----------//

import get                from 'lodash/get'

import { connect }        from 'react-redux'

import ClientForm         from './ClientForm'

import { clientsActions } from 'modules/clients/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  isLoading  : state.clients.isLoading,
  selectedID : get(state, 'form.client.initial.id', null),
})

const mapDispatch = (dispatch) => ({
  onSubmit: (values) => {
    return new Promise((res, rej) => {
      return dispatch(clientsActions.update(values, res, rej))
    })
  }
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ClientForm)
