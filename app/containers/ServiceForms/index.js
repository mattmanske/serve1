//-----------  Imports  -----------//

import get                 from 'lodash/get'

import { connect }         from 'react-redux'

import NotesForm           from './NotesForm'
import PersonForm          from './PersonForm'
import DetailsForm         from './DetailsForm'

import { servicesActions } from 'modules/services/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  isLoading: state.services.isLoading,
})

const mapDispatch = (dispatch) => ({
  onSubmit: (values) => {
    return new Promise((res, rej) => {
      return dispatch(servicesActions.update(values, res, rej))
    })
  }
})

//-----------  Exports  -----------//

export const ServiceNotesForm   = connect(mapState, mapDispatch)(NotesForm)
export const ServicePersonForm  = connect(mapState, mapDispatch)(PersonForm)
export const ServiceDetailsForm = connect(mapState, mapDispatch)(DetailsForm)
