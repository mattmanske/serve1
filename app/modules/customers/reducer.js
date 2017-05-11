//-----------  Imports  -----------//

import flatMap       from 'lodash/flatMap'

import { AUTH }      from 'modules/auth/actions'

import { CUSTOMERS } from './actions'

//-----------  Definitions  -----------//

const initialState = {
  data       : [],
  error      : null,
  isLoading  : false,
  isWatching : false,
}

//-----------  Reducers  -----------//

function customersReducer(state = initialState, action){
  let isWatching = true, isLoading = true
  let { data, error } = action

  switch (action.type){

    case AUTH.SYNC:
      return { ...state, isLoading, isWatching }

    case CUSTOMERS.SUCCESS:
      return { ...initialState, data, isWatching }

    case CUSTOMERS.FAILURE:
      return { ...initialState, error, isWatching }

    default:
      return state
  }
}

//-----------  Exports  -----------//

export default customersReducer
