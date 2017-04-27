//-----------  Imports  -----------//

import { action, createActionConstants } from 'modules/helpers'

//-----------  Definitions  -----------//

export const AUTH = createActionConstants('AUTH', ['SIGNIN', 'SIGNOUT'])

//-----------  Actions  -----------//

export const authActions = {
  sync: () => {
    return action(AUTH.SYNC)
  },
  signIn: () => {
    return action(AUTH.SIGNIN)
  },
  signOut: () => {
    return action(AUTH.SIGNOUT)
  },
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (user) => {
    return action(AUTH.SUCCESS, { user })
  },
  failure: (error = null) => {
    return action(AUTH.FAILURE, { error })
  }
}
