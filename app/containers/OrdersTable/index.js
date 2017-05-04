//-----------  Imports  -----------//

import { connect }       from 'react-redux'

import OrdersTable       from './OrdersTable'

import { ordersActions } from 'modules/orders/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({})

const mapDispatch = (dispatch) => ({
  shipOrder: (orderID, status) => dispatch(ordersActions.ship(orderID, status))
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(OrdersTable)
