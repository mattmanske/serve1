//-----------  Imports  -----------//

import get              from 'lodash/get'

import { connect }      from 'react-redux'

import CaseForm         from './CaseForm'

import { casesActions } from 'modules/cases/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  isLoading  : state.cases.isLoading,
  selectedID : get(state, 'form.case.initial.id', null),
})

const mapDispatch = (dispatch) => ({
  onSubmit: (values) => {
    return new Promise((res, rej) => {
      return dispatch(casesActions.update(values, res, rej))
    })
  }
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(CaseForm)
