//-----------  Imports  -----------//

import { connect }      from 'react-redux'
import { initialize }   from 'redux-form'

import CaseSelect       from './CaseSelect'

import { casesActions } from 'modules/cases/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  cases     : state.cases.data,
  isLoading : state.cases.isLoading,
})

const mapDispatch = (dispatch, ownProps) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(CaseSelect)
