//-----------  Imports  -----------//

import { connect }      from 'react-redux'

import ShowsTable       from './ShowsTable'

import { modalActions } from 'modules/modal/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({})

const mapDispatch = (dispatch) => ({
  showModal: (show) => dispatch(modalActions.showModal('SHOW_FORM', { initialValues: show })),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ShowsTable)
