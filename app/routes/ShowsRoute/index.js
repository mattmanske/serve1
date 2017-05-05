//-----------  Imports  -----------//

import { connect }      from 'react-redux'

import ShowsRoute       from './ShowsRoute'

import { modalActions } from 'modules/modal/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  shows   : state.shows,
  members : state.members.data,
})

const mapDispatch = (dispatch) => ({
  showModal: (type, props, opts) => dispatch(modalActions.showModal(type, props, opts)),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ShowsRoute)
