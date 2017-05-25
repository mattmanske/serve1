//-----------  Imports  -----------//

import { connect } from 'react-redux'

import ContactSelect from './ContactSelect'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  contacts  : state.contacts.data,
  isLoading : state.contacts.isLoading,
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ContactSelect)
