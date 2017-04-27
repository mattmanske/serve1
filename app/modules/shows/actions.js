//-----------  Imports  -----------//

import { action, createActionConstants } from 'modules/helpers'

//-----------  Definitions  -----------//

export const SHOWS = createActionConstants('SHOWS')

//-----------  Shows Actions  -----------//

export const showsActions = {
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => {
    return action(SHOWS.SUCCESS, { data })
  },
  failure: (error = null) => {
    return action(SHOWS.FAILURE, { error })
  }
}
