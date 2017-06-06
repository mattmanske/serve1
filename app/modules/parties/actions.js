//-----------  Imports  -----------//

import { action, createActionConstants } from 'modules/helpers'

//-----------  Definitions  -----------//

export const PARTIES = createActionConstants('PARTIES', ['UPDATE', 'SELECT'])

//-----------  Parties Actions  -----------//

export const partiesActions = {
  sync: () => {
    return action(PARTIES.SYNC)
  },
  update: (service, resolve, reject) => {
    return action(PARTIES.UPDATE, { service, resolve, reject })
  },
  select: (serviceID, resolve, reject) => {
    return action(PARTIES.SELECT, { serviceID, resolve, reject })
  }
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => {
    return action(PARTIES.SUCCESS, { data })
  },
  failure: (error = null) => {
    return action(PARTIES.FAILURE, { error })
  }
}
