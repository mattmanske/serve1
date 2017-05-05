//-----------  Imports  -----------//

import moment    from 'moment'
import sortBy    from 'lodash/sortBy'
import flatMap   from 'lodash/flatMap'

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

  data = flatMap(data, (show, key) => Object.assign({ key }, show))
  data = sortBy(data, show => +moment(show.date))

  switch (action.type){

    case AUTH.SYNC:
    case SHOWS.CREATE:
    case SHOWS.UPDATE:
      return { ...state, isLoading, isWatching }

    case SHOWS.SUCCESS:
      return { ...initialState, data, isWatching }

    case AUTH.SIGNOUT:
    case SHOWS.FAILURE:
      return { ...initialState, error, isWatching }

    default:
      return state
  }
}

//-----------  Exports  -----------//

export default showsReducer
