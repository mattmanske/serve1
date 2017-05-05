//-----------  Imports  -----------//

import { action, createActionConstants } from 'modules/helpers'

//-----------  Definitions  -----------//

export const SHOWS = createActionConstants('SHOWS', ['CREATE', 'UPDATE', 'DELETE'])

//-----------  Shows Actions  -----------//

export const showsActions = {
  create: (show, resolve, reject) => {
    return action(SHOWS.CREATE, { show, resolve, reject })
  },
  update: (show, resolve, reject) => {
    return action(SHOWS.UPDATE, { show, resolve, reject })
  },
  delete: (showID, resolve, reject) => {
    return action(SHOWS.DELETE, { showID, resolve, reject })    
  }
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => {
    return action(SHOWS.SUCCESS, { data })
  },
  failure: (error = null, reject) => {
    if (reject) reject(error)
    return action(SHOWS.FAILURE, { error })
  }
}
