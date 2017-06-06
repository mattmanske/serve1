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
  onSelect: (caseID, option) => {
    if (!caseID) return dispatch(initialize('case', {}))

    return new Promise((res, rej) => {
      return dispatch(casesActions.select(caseID, res, rej))
    }).then(caseID => {
      return ownProps.afterSelect && ownProps.afterSelect(caseID)
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
