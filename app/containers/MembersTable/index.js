//-----------  Imports  -----------//

import { connect }      from 'react-redux'

import MembersTable     from './MembersTable'

import { modalActions } from 'modules/modal/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  members: state.members
})

const mapDispatch = (dispatch) => ({
  memberModal: (record) => dispatch(modalActions.showModal('MEMBER_FORM', { initialValues: record })),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(MembersTable)
