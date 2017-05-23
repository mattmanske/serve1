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

export default function createRoutes(store, subdomain){
  const { injectReducer, injectSagas } = getAsyncInjectors(store)

  const routes = subdomain ? [{
    path : '/',
    name : 'dashboard',
    getComponent(nextState, cb){
      import('routes/DashboardRoute').then(loadModule(cb)).catch(err)
    },
  }] : [{
    path : '/register',
    name : 'registration',
    getComponent(nextState, cb){
      import('routes/RegistrationRoute').then(loadModule(cb)).catch(err)
    },
  },{
    path : '/',
    name : 'home',
    getComponent(nextState, cb){
      import('routes/HomeRoute').then(loadModule(cb)).catch(err)
    },
  }]

  return [ ...routes, {
    path : '/about',
    name : 'about',
    getComponent(nextState, cb){
      import('routes/AboutRoute').then(loadModule(cb)).catch(err)
    },
  },{
    path : '*',
    name : '404-redirect',
    onEnter: (nextState, replace) => replace('/')
  }]
}
