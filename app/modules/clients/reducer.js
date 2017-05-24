//-----------  Imports  -----------//

import { ORGANIZATION } from 'modules/organization/actions'

import { CLIENTS }      from './actions'

//-----------  Definitions  -----------//

const initialState = {
  data       : {},
  error      : null,
  isLoading  : true,
  isWatching : false,
}

//-----------  Reducers  -----------//

function clientsReducer(state = initialState, action){
  let isWatching = true, isLoading = false
  let { data, error } = action

  if (data) delete data['_empty']

  switch (action.type){

    case CLIENTS.UPDATE:
    case ORGANIZATION.SUCCESS:
      return { ...state, isLoading: true }

    case CLIENTS.SUCCESS:
      return { ...initialState, data, isLoading, isWatching }

    case CLIENTS.FAILURE:
      return { ...initialState, error, isLoading, isWatching }

    default:
      return state
  }
}

//-----------  Exports  -----------//

export default clientsReducer
