//-----------  Imports  -----------//

import { action, createActionConstants } from 'modules/helpers'

//-----------  Definitions  -----------//

export const SERVICES = createActionConstants('SERVICES', ['UPDATE'])

//-----------  Services Actions  -----------//

export const servicesActions = {
  sync: () => {
    return action(SERVICES.SYNC)
  },
  update: (service, resolve, reject) => {
    return action(SERVICES.UPDATE, { service, resolve, reject })
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
