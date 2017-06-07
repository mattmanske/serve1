//-----------  Imports  -----------//

import { action, createActionConstants } from 'modules/helpers'

//-----------  Definitions  -----------//

export const SERVICES = createActionConstants('SERVICES', ['UPDATE'])

//-----------  Attempts Actions  -----------//

export const attemptsActions = {
  sync: () => {
    return action(SERVICES.SYNC)
  },
  update: (attempt, resolve, reject) => {
    return action(SERVICES.UPDATE, { attempt, resolve, reject })
  },
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => {
    return action(SERVICES.SUCCESS, { data })
  },
  failure: (error = null) => {
    return action(SERVICES.FAILURE, { error })
  }
}
