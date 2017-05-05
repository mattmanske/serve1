//-----------  Imports  -----------//

import { connect }        from 'react-redux'

import MembersForm        from './MembersForm'

import { membersActions } from 'modules/members/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  members: state.members
})

const mapDispatch = (dispatch) => ({
  createMember(member){
    dispatch(membersActions.create(member))
  },
  updateMember(member){
    dispatch(membersActions.update(member))
  }
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(MembersForm)
