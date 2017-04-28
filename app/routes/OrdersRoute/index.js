//-----------  Imports  -----------//

import { connect } from 'react-redux'

import OrdersRoute from './OrdersRoute'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  orders: state.orders
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(OrdersRoute)
