//-----------  Imports  -----------//

import { AUTH } from './actions'

//-----------  Definitions  -----------//

const initialState = {
  user       : {},
  error      : null,
  isLoading  : true,
  isWatching : false,
  isLoggedIn : false
}

//-----------  Reducers  -----------//

function authReducer(state = initialState, action){
  let isWatching = true, isLoading = false
  let { user, error } = action

  const isLoggedIn = !!(user && user.uid)

  switch (action.type){

    case AUTH.SYNC:
    case AUTH.TOKEN:
    case AUTH.SIGNIN:
    case AUTH.SIGNOUT:
      return { ...state, isLoading: true }

    case AUTH.SUCCESS:
      return { ...initialState, user, isLoading, isWatching, isLoggedIn }

    case AUTH.FAILURE:
      return { ...initialState, error, isLoading, isWatching }

    default:
      return state
  }
}

//-----------  Exports  -----------//

export default authReducer
