//-----------  Imports  -----------//

import { connect }      from 'react-redux'

import ShowForm         from './ShowForm'

import { modalActions } from 'modules/modal/actions'
import { showsActions } from 'modules/shows/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({})

const mapDispatch = (dispatch) => ({
  deleteShow(showID){
    dispatch(showsActions.delete(showID))
    dispatch(modalActions.hideModal())
  },
  onSubmit(formData){
    return new Promise((resolve, reject) => {
      return formData.key
        ? dispatch(showsActions.update(formData, resolve, reject))
        : dispatch(showsActions.create(formData, resolve, reject))
    })
  },
  onSubmitSuccess(){
    dispatch(modalActions.hideModal())
  }
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ShowForm)
