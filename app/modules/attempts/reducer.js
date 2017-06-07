//-----------  Imports  -----------//

import { ORGANIZATION } from 'modules/organization/actions'

import { SERVICES }     from './actions'

//-----------  Definitions  -----------//

const initialState = {
  data       : {},
  error      : null,
  isLoading  : true,
  isWatching : false,
}

//-----------  Reducers  -----------//

function attemptsReducer(state = initialState, action){
  let isWatching = true, isLoading = false
  let { data, error } = action

  if (data) delete data['_empty']

  switch (action.type){

    case SERVICES.UPDATE:
    case ORGANIZATION.SUCCESS:
      return { ...state, isLoading: true }

    case SERVICES.SUCCESS:
      return { ...initialState, data, isLoading, isWatching }

    case SERVICES.FAILURE:
      return { ...initialState, error, isLoading, isWatching }

    default:
      return state
  }
}

//-----------  Exports  -----------//

export default attemptsReducer
