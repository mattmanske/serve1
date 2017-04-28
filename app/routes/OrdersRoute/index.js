//-----------  Imports  -----------//

import { connect }       from 'react-redux'

import OrdersRoute       from './OrdersRoute'

import { ordersActions } from 'modules/orders/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  orders: state.orders
})

const mapDispatch = (dispatch) => ({
  shipOrder: (orderID, status) => dispatch(ordersActions.ship(orderID, status))
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(OrdersRoute)
