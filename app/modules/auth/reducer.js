//-----------  Imports  -----------//

import includes from 'lodash/includes'

import { AUTH } from './actions'

//-----------  Definitions  -----------//

const initialState = {
  user       : {},
  error      : null,
  isLoading  : false,
  isWatching : false,
  isLoggedIn : false
}

const adminIds = ['i5scPve7cAZRLtPmv4XzMUgtnC83', '']

//-----------  Reducers  -----------//

function authReducer(state = initialState, action){
  const isWatching = true, isLoading = true
  const { user, error } = action

  const isLoggedIn = (user && user.uid) // && includes(adminIds, user.uid))

  switch (action.type){

    case AUTH.SYNC:
    case AUTH.SIGNIN:
    case AUTH.SIGNOUT:
      return { ...state, isLoading, isWatching }

    case AUTH.SUCCESS:
      return { ...initialState, user, isLoggedIn, isWatching }

    case AUTH.FAILURE:
      return { ...initialState, error, isWatching }

    default:
      return state
  }
}

//-----------  Exports  -----------//

export default authReducer
