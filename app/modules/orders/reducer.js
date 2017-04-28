//-----------  Imports  -----------//

import { AUTH }   from 'modules/auth/actions'

import { ORDERS } from './actions'

//-----------  Definitions  -----------//

const initialState = {
  data       : {},
  error      : null,
  isLoading  : false,
  isWatching : false,
}

//-----------  Reducers  -----------//

function ordersReducer(state = initialState, action){
  let isWatching = true, isLoading = true
  let { data, error } = action

  switch (action.type){

    case AUTH.SYNC:
      return { ...state, isLoading, isWatching }

    case ORDERS.SUCCESS:
      return { ...initialState, data, isWatching }

    case ORDERS.FAILURE:
      return { ...initialState, error, isWatching }

    default:
      return state
  }
}

//-----------  Exports  -----------//

export default ordersReducer
