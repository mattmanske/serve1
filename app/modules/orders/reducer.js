//-----------  Imports  -----------//

import { ORDERS } from './actions'

//-----------  Definitions  -----------//

const initialState = {}

//-----------  Reducers  -----------//

function ordersReducer(state = initialState, action){
  const { orders, error } = action

  switch (action.type){

    case ORDERS.SUCCESS:
      return { ...initialState, orders }

    case ORDERS.FAILURE:
      return { ...initialState, error }

    default:
      return state
  }
}

//-----------  Exports  -----------//

export default ordersReducer
