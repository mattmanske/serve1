//-----------  Imports  -----------//

import { action, createActionConstants } from 'modules/helpers'

//-----------  Definitions  -----------//

export const CUSTOMERS = createActionConstants('CUSTOMERS')

//-----------  Customers Actions  -----------//

export const customersActions = {}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => {
    return action(CUSTOMERS.SUCCESS, { data })
  },
  failure: (error = null) => {
    return action(CUSTOMERS.FAILURE, { error })
  }
}
