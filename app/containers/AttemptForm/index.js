//-----------  Imports  -----------//

import { connect }         from 'react-redux'

import NotesForm           from './NotesForm'
import PersonForm          from './PersonForm'
import DetailsForm         from './DetailsForm'

import { attemptsActions } from 'modules/attempts/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  isLoading: state.attempts.isLoading,
})

const mapDispatch = (dispatch) => ({
  onSubmit: (values) => {
    return new Promise((res, rej) => {
      return dispatch(attemptsActions.update(values, res, rej))
    })
  }
})

//-----------  Exports  -----------//

export const AttemptNotesForm   = connect(mapState, mapDispatch)(NotesForm)
export const AttemptPersonForm  = connect(mapState, mapDispatch)(PersonForm)
export const AttemptDetailsForm = connect(mapState, mapDispatch)(DetailsForm)
