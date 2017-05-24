//-----------  Imports  -----------//

import { connect } from 'react-redux'

import SelectContact from './SelectContact'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  contacts  : state.contacts.data,
  isLoading : state.contacts.isLoading,
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(SelectContact)
