//-----------  Imports  -----------//

import { getAsyncInjectors } from '../utils/asyncInjectors'

//-----------  Helpers  -----------//

const err = (err) => {
  console.error('Dynamic page loading failed', err)
}

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default)
}

//-----------  Exports  -----------//

export default function createRoutes(store){
  const { injectReducer, injectSagas } = getAsyncInjectors(store)

  return [{
    path : '/',
    name : 'dashobard',
    getComponent(nextState, cb){
      import('routes/DashboardRoute').then(loadModule(cb)).catch(err)
    },
  }]
}
