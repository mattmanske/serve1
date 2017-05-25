//-----------  Imports  -----------//

import get                from 'lodash/get'

import { connect }        from 'react-redux'

import ClientForm         from './ClientForm'

import { clientsActions } from 'modules/clients/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  id: get(state, 'form.client.initial.id', null)
})

const mapDispatch = (dispatch) => ({
  onSelect: (selection) => {
    const clientID = selection && selection.value
    return dispatch(clientsActions.select(clientID))
  },
  onSubmit: (formValue) => {
    return new Promise((res, rej) => {
      return dispatch(clientsActions.update(formValue, res, rej))
    })
  },
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ClientForm)
