//-----------  Imports  -----------//

import { connect }             from 'react-redux'
import { formValueSelector }   from 'redux-form'

import RegistrationRoute       from './RegistrationRoute'

import { organizationActions } from 'modules/organization/actions'

import { toSlug }              from 'utils/records'

//-----------  Redux Maps  -----------//

const mapState = (state) => {
  const name = formValueSelector('registration')(state, 'name')

  return {
    auth                    : state.auth,
    initialValues           : {
      id     : name && toSlug(name),
      state  : 'WI',
      county : 'Dane',
    },
    enableReinitialize      : true,
    keepDirtyOnReinitialize : true,
  }
}

const mapDispatch = (dispatch) => ({
  onSubmit: (attrs) => {
    return new Promise((resolve, reject) => {
      dispatch(organizationActions.create(attrs, resolve, reject))
    })
  },
  onSubmitSuccess: (attrs) => {
    return console.log('made it')
  }
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(RegistrationRoute)
