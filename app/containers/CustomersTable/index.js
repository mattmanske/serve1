//-----------  Imports  -----------//

import { connect }    from 'react-redux'

import CustomersTable from './CustomersTable'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  customers: state.customers
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(CustomersTable)
