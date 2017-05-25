//-----------  Imports  -----------//

import { connect }  from 'react-redux'

import NewCaseRoute from './NewCaseRoute'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  isLoading: (state.clients.isLoading || state.contacts.isLoading)
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(NewCaseRoute)
