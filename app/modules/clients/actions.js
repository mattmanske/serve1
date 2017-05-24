//-----------  Imports  -----------//

import { action, createActionConstants } from 'modules/helpers'

//-----------  Definitions  -----------//

export const CLIENTS = createActionConstants('CLIENTS', ['UPDATE'])

//-----------  Clients Actions  -----------//

export const clientsActions = {
  sync: () => {
    return action(CLIENTS.SYNC)
  },
  update: (client, resolve, reject) => {
    return action(CLIENTS.UPDATE, { client, resolve, reject })
  }
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => {
    return action(CLIENTS.SUCCESS, { data })
  },
  failure: (error = null) => {
    return action(CLIENTS.FAILURE, { error })
  }
}
