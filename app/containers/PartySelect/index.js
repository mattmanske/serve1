//-----------  Imports  -----------//

import { connect }        from 'react-redux'
import { initialize }     from 'redux-form'

import PartySelect        from './PartySelect'

import { partiesActions } from 'modules/parties/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  parties   : state.parties.data,
  isLoading : state.parties.isLoading,
})

const mapDispatch = (dispatch, ownProps) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(PartySelect)
