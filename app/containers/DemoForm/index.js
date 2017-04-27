//-----------  Imports  -----------//

import { connect } from 'react-redux'

import DemoForm    from './DemoForm'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({})

const mapDispatch = (dispatch) => ({
  onSubmit(formData){
    return new Promise((resolve, reject) => setTimeout(() => resolve(formData), 1500))
  }
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(DemoForm)
