//-----------  Imports  -----------//

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import AttemptsTable          from './AttemptsTable'

import { modalActions }       from 'modules/modal/actions'
import { attemptsActions }    from 'modules/attempts/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  parties: state.parties.data
})

const mapDispatch = (dispatch) => ({
  modalActions    : bindActionCreators(modalActions, dispatch),
  attemptsActions : bindActionCreators(attemptsActions, dispatch),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(AttemptsTable)
