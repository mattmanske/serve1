//-----------  Imports  -----------//

import { ORGANIZATION } from 'modules/organization/actions'

import { PARTIES }     from './actions'

//-----------  Definitions  -----------//

const initialState = {
  data       : {},
  error      : null,
  isLoading  : true,
  isWatching : false,
}

//-----------  Reducers  -----------//

function partiesReducer(state = initialState, action){
  let isWatching = true, isLoading = false
  let { data, error } = action

  if (data) delete data['_empty']

  switch (action.type){

    case PARTIES.UPDATE:
    case ORGANIZATION.SUCCESS:
      return { ...state, isLoading: true }

    case PARTIES.SUCCESS:
      return { ...initialState, data, isLoading, isWatching }

    case PARTIES.FAILURE:
      return { ...initialState, error, isLoading, isWatching }

    default:
      return state
  }
}

//-----------  Exports  -----------//

export default partiesReducer
