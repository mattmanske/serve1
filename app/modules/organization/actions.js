//-----------  Imports  -----------//

import { action, createActionConstants } from 'modules/helpers'

//-----------  Definitions  -----------//

export const ORGANIZATION = createActionConstants('ORGANIZATION', ['CREATE'])

//-----------  Organization Actions  -----------//

export const organizationActions = {
  request: (organizationID) => {
    return action(ORGANIZATION.REQUEST, { organizationID })
  },
  create: (organization, resolve, reject) => {
    return action(ORGANIZATION.CREATE, { organization, resolve, reject })
  }
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => {
    return action(ORGANIZATION.SUCCESS, { data })
  },
  failure: (error = null) => {
    return action(ORGANIZATION.FAILURE, { error })
  }
}