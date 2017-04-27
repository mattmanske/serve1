//-----------  Imports  -----------//

import { compose,
         createStore,
         applyMiddleware }         from 'redux'
import { routerMiddleware }        from 'react-router-redux'
import { responsiveStoreEnhancer } from 'redux-responsive'
import createSagaMiddleware        from 'redux-saga'

import createReducer               from './reducers'
import rootSaga                    from './modules'

//-----------  Definitions  -----------//

const sagaMiddleware = createSagaMiddleware()

//-----------  Exports  -----------//

export default function configureStore(initialState = {}, history){
  const middlewares = [sagaMiddleware, routerMiddleware(history)]
  const enhancers   = [responsiveStoreEnhancer, applyMiddleware(...middlewares)]

  const composeEnhancers =
    (process.env.NODE_ENV !== 'production'
    && typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers)
  )

  store.runSaga = sagaMiddleware.run(rootSaga)
  store.asyncReducers = {}

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */

  if (module.hot){
    module.hot.accept('./reducers', () => {
      import('./reducers').then((reducerModule) => {
        const createReducers = reducerModule.default
        const nextReducers   = createReducers(store.asyncReducers)
        store.replaceReducer(nextReducers)
      })
    })
  }

  //-----------  Exports  -----------//

  return store
}
