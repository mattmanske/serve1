//-----------  Imports  -----------//

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import ServicesTable          from './ServicesTable'

import { modalActions }       from 'modules/modal/actions'
import { servicesActions }    from 'modules/services/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({})

const mapDispatch = (dispatch) => ({
  modalActions    : bindActionCreators(modalActions, dispatch)
  servicesActions : bindActionCreators(servicesActions, dispatch),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ServicesTable)
