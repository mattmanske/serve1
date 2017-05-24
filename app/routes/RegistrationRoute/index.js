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
    enableReinitialize      : true,
    keepDirtyOnReinitialize : true,
    initialValues: {
      id     : name && toSlug(name),
      state  : 'WI',
      county : 'Dane',
    },
  }
}

const mapDispatch = (dispatch) => ({
  onSubmit: (attrs) => {
    return new Promise((resolve, reject) => {
      dispatch(organizationActions.create(attrs, resolve, reject))
    })
  },
  onSubmitSuccess: ({ id, token }) => {
    const { port, protocol, hostname } = window.location

    const query     = `?token=${token}`
    const hasOrg    = ((hostname.split('.').length >= 3) && ('www' != hostname.split('.')[0]))
    const domainUrl = (hasOrg) ? hostname.substring(hostname.indexOf('.') + 1) : hostname
    const redirect  = port ? `${protocol}//${id}.${domainUrl}:${port}${query}` : `${protocol}//${id}.${domainUrl}${query}`

    return window.location = redirect
  }
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(RegistrationRoute)
