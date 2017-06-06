//-----------  Imports  -----------//

import get              from 'lodash/get'

import { connect }      from 'react-redux'
import { initialize }   from 'redux-form'

import CaseForm         from './CaseForm'

import { casesActions } from 'modules/cases/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  isLoading  : state.cases.isLoading,
  selectedID : get(state, 'form.case.initial.id', null),
})

const mapDispatch = (dispatch, ownProps) => ({
  onSelect: (caseID, option) => {
    if (!caseID) return dispatch(initialize('case', {}))

    return new Promise((res, rej) => {
      return dispatch(casesActions.select(caseID, res, rej))
    }).then(caseID => {
      return ownProps.afterSelect && ownProps.afterSelect(caseID)
    })
  },
  onSubmit: (values) => {
    return new Promise((res, rej) => {
      return dispatch(casesActions.update(values, res, rej))
    })
  }
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(CaseForm)
