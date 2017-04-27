//-----------  Imports  -----------//

import moment    from 'moment'
import sortBy    from 'lodash/sortBy'

import { AUTH }  from 'modules/auth/actions'

import { SHOWS } from './actions'

//-----------  Definitions  -----------//

const initialState = {
  data       : {},
  error      : null,
  isLoading  : false,
  isWatching : false,
}

//-----------  Reducers  -----------//

function showsReducer(state = initialState, action){
  let isWatching = true, isLoading = true
  let { data, error } = action

  data = sortBy(data, show => +moment(show.date))

  switch (action.type){

    case AUTH.SYNC:
      return { ...state, isLoading, isWatching }

    case SHOWS.SUCCESS:
      return { ...initialState, data }

    case SHOWS.FAILURE:
      return { ...initialState, error }

    default:
      return state
  }
}

//-----------  Exports  -----------//

export default showsReducer
