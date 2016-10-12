//-----------  Imports  -----------//

import { createStore, combineReducers } from 'redux'
import { reducer as formReducer }       from 'redux-form'

import configReducer                    from '../reducers/config-reducer'
import resourceReducer                  from '../reducers/resource-reducer'
import selectionsReduxer                from '../reducers/selections-reducer'

//-----------  Store  -----------//

const ReduxStore = (initialState) => {
  const reducers = combineReducers({
    form       : formReducer,
    config     : configReducer,
    resource   : resourceReducer,
    selections : selectionsReduxer
   })
  return createStore(reducers, initialState)
}

//-----------  Export  -----------//

export default ReduxStore
