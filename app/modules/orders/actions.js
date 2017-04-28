//-----------  Imports  -----------//

import { action, createActionConstants } from 'modules/helpers'

//-----------  Definitions  -----------//

export const ORDERS = createActionConstants('ORDERS')

//-----------  Orders Actions  -----------//

export const ordersActions = {
  request: () => {
    return action(ORDERS.REQUEST)
  }
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data, hasMore) => {
    return action(ORDERS.SUCCESS, { data, hasMore })
  },
  failure: (error = null) => {
    return action(ORDERS.FAILURE, { error })
  }
}
