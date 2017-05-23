//-----------  Imports  -----------//

import { ORGANIZATION } from './actions'

//-----------  Definitions  -----------//

const initialState = {
  data      : {},
  error     : null,
  isLoading : true,
}

//-----------  Reducers  -----------//

function organizationReducer(state = initialState, action){
  let { data, error } = action
  let isLoading = false

  switch (action.type){

    case ORGANIZATION.REQUEST:
      return { ...initialState }

    case ORGANIZATION.SUCCESS:
      return { ...initialState, data, isLoading }

    case ORGANIZATION.FAILURE:
      return { ...initialState, error, isLoading }

    default:
      return state
  }
}

//-----------  Exports  -----------//

export default organizationReducer
