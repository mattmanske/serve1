//-----------  Imports  -----------//

import { connect }      from 'react-redux'

import CaseSelect       from './CaseSelect'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  cases     : state.cases.data,
  isLoading : state.cases.isLoading,
})

const mapDispatch = (dispatch, ownProps) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(CaseSelect)
