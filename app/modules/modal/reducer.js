//-----------  Imports  -----------//

import { SHOW_MODAL, HIDE_MODAL } from './actions'

//-----------  Definitions  -----------//

const initialState = {
  child   : null,
  props   : {},
  options : {},
}

//-----------  Reducers  -----------//

function modalReducer(state = initialState, action){
  const { child, props, options } = action

  switch (action.type){

    case SHOW_MODAL:
      return { child, props: props || {}, options: options || {} }

    case HIDE_MODAL:
      return initialState

    default:
      return state
  }
}

//-----------  Exports  -----------//

export default modalReducer
