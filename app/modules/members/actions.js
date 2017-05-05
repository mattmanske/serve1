//-----------  Imports  -----------//

import { action, createActionConstants } from 'modules/helpers'

//-----------  Definitions  -----------//

export const MEMBERS = createActionConstants('MEMBERS', ['CREATE', 'UPDATE'])

//-----------  Shows Actions  -----------//

export const membersActions = {
  create: (member, resolve, reject) => {
    return action(MEMBERS.CREATE, { member, resolve, reject })
  },
  update: (member, resolve, reject) => {
    return action(MEMBERS.UPDATE, { member, resolve, reject })
  },
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => {
    return action(MEMBERS.SUCCESS, { data })
  },
  failure: (error = null, reject) => {
    if (reject) reject(error)
    return action(SHOWS.FAILURE, { error })
  }
}
