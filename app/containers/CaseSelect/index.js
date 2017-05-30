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

const mapDispatch = (dispatch, ownProps) => ({
  onChange: (caseID, option) => {
    if (!caseID) return dispatch(initialize('case', {}))

    return new Promise((res, rej) => {
      return dispatch(casesActions.select(caseID, res, rej))
    }).then(caseID => {
      return ownProps.afterSelect && ownProps.afterSelect(caseID)
    })
  },
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(CaseSelect)
