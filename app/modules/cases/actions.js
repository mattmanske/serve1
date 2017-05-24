//-----------  Imports  -----------//

import { action, createActionConstants } from 'modules/helpers'

//-----------  Definitions  -----------//

export const CASES = createActionConstants('CASES', ['UPDATE'])

//-----------  Cases Actions  -----------//

export const casesActions = {
  sync: () => {
    return action(CASES.SYNC)
  },
  update: (kase, resolve, reject) => {
    return action(CASES.UPDATE, { kase, resolve, reject })
  }
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => {
    return action(CASES.SUCCESS, { data })
  },
  failure: (error = null) => {
    return action(CASES.FAILURE, { error })
  }
}
