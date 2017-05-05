//-----------  Imports  -----------//

import { connect }      from 'react-redux'

import ShowsTable       from './ShowsTable'

import { modalActions } from 'modules/modal/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({})

const mapDispatch = (dispatch) => ({
  showModal: (type, props, opts) => dispatch(modalActions.showModal(type, props, opts)),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ShowsTable)
