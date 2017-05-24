//-----------  Imports  -----------//

import { ORGANIZATION } from 'modules/organization/actions'

import { CASES }        from './actions'

//-----------  Definitions  -----------//

const initialState = {
  data       : {},
  error      : null,
  isLoading  : true,
  isWatching : false,
}

//-----------  Reducers  -----------//

function casesReducer(state = initialState, action){
  let isWatching = true, isLoading = false
  let { data, error } = action

  if (data) delete data['_empty']

  switch (action.type){

    case CASES.UPDATE:
    case ORGANIZATION.SUCCESS:
      return { ...state, isLoading: true }

    case CASES.SUCCESS:
      return { ...initialState, data, isLoading, isWatching }

    case CASES.FAILURE:
      return { ...initialState, error, isLoading, isWatching }

    default:
      return state
  }
}

//-----------  Exports  -----------//

export default casesReducer
