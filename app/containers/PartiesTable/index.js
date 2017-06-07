//-----------  Imports  -----------//

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import PartiesTable           from './PartiesTable'

import { modalActions }       from 'modules/modal/actions'
import { partiesActions }     from 'modules/parties/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({})

const mapDispatch = (dispatch) => ({
  modalActions   : bindActionCreators(modalActions, dispatch)
  partiesActions : bindActionCreators(partiesActions, dispatch),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(PartiesTable)
