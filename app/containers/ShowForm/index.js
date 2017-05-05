//-----------  Imports  -----------//

import { connect } from 'react-redux'

import ShowForm    from './ShowForm'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({})

const mapDispatch = (dispatch) => ({
  onSubmit(formData){
    console.log(formData);
    return new Promise((resolve, reject) => setTimeout(() => resolve(formData), 1500))
  }
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ShowForm)
