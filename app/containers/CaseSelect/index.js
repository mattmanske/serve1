//-----------  Imports  -----------//

import { connect }      from 'react-redux'

import CaseSelect       from './CaseSelect'

import { casesActions } from 'modules/cases/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  cases     : state.cases.data,
  isLoading : state.cases.isLoading,
})

const mapDispatch = (dispatch, ownProps) => ({
  onChange: (option) => {
    const caseID = (option && option.value)

    return new Promise((res, rej) => {
      return dispatch(casesActions.select(caseID, res, rej))
    }).then(selectedID => {
      return ownProps.afterSelect && ownProps.afterSelect(selectedID)
    })
  },
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(CaseSelect)
