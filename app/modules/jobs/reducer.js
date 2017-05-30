//-----------  Imports  -----------//

import { ORGANIZATION } from 'modules/organization/actions'

import { JOBS }         from './actions'

//-----------  Definitions  -----------//

const initialState = {
  data       : {},
  error      : null,
  isLoading  : true,
  isWatching : false,
}

//-----------  Reducers  -----------//

function jobsReducer(state = initialState, action){
  let isWatching = true, isLoading = false
  let { data, error } = action

  if (data) delete data['_empty']

  switch (action.type){

    case JOBS.UPDATE:
    case ORGANIZATION.SUCCESS:
      return { ...state, isLoading: true }

    case JOBS.SUCCESS:
      return { ...initialState, data, isLoading, isWatching }

    case JOBS.FAILURE:
      return { ...initialState, error, isLoading, isWatching }

    default:
      return state
  }
}

//-----------  Exports  -----------//

export default jobsReducer
