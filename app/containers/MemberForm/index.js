//-----------  Imports  -----------//

import { connect }        from 'react-redux'

import MemberForm         from './MemberForm'

import { modalActions }   from 'modules/modal/actions'
import { membersActions } from 'modules/members/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({})

const mapDispatch = (dispatch) => ({
  onSubmit(formData){
    return new Promise((resolve, reject) => {
      return formData.key
        ? dispatch(membersActions.update(formData, resolve, reject))
        : dispatch(membersActions.create(formData, resolve, reject))
    })
  },
  onSubmitSuccess(){
    dispatch(modalActions.showModal('MEMBERS_TABLE', {}, { size: 'rg' }))
  }
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(MemberForm)
