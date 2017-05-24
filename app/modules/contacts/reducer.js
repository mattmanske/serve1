//-----------  Imports  -----------//

import { ORGANIZATION } from 'modules/organization/actions'

import { CONTACTS }     from './actions'

//-----------  Definitions  -----------//

const initialState = {
  data       : {},
  error      : null,
  isLoading  : true,
  isWatching : false,
}

//-----------  Reducers  -----------//

function contactsReducer(state = initialState, action){
  let isWatching = true, isLoading = false
  let { data, error } = action

  if (data) delete data['_empty']

  switch (action.type){

    case CONTACTS.UPDATE:
    case ORGANIZATION.SUCCESS:
      return { ...state, isLoading: true }

    case CONTACTS.SUCCESS:
      return { ...initialState, data, isLoading, isWatching }

    case CONTACTS.FAILURE:
      return { ...initialState, error, isLoading, isWatching }

    default:
      return state
  }
}

//-----------  Exports  -----------//

export default contactsReducer
