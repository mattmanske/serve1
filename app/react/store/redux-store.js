//-----------  Imports  -----------//

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { combineForms }                                  from 'react-redux-form'
import thunk                                             from 'redux-thunk'

import configReducer     from '../reducers/config-reducer'
import selectionsReduxer from '../reducers/selections-reducer'

//-----------  Store  -----------//

const ReduxStore = (initialState) => {
  const reducers = combineReducers({
    config     : configReducer,
    selections : selectionsReduxer,
    models     : combineForms({
      user         : {},
      organization : {}
    }, 'models')
   })
  return createStore(reducers, initialState, applyMiddleware(thunk))
}

//-----------  Export  -----------//

export default ReduxStore
