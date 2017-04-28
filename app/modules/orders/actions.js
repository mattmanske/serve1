//-----------  Imports  -----------//

import { action, createActionConstants } from 'modules/helpers'

//-----------  Definitions  -----------//

export const ORDERS = createActionConstants('ORDERS')

//-----------  Orders Actions  -----------//

export const ordersActions = {
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => {
    return action(ORDERS.SUCCESS, { data })
  },
  failure: (error = null) => {
    return action(ORDERS.FAILURE, { error })
  }
}
