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

  const routes = !subdomain ? [{
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
  }] : [{
    path : '/cases/new(/:step)',
    name : 'new-case',
    getComponent(nextState, cb){
      import('routes/CasesRoute/NewCaseRoute').then(loadModule(cb)).catch(err)
    },
  },{
    path : '/cases/:caseID',
    name : 'case-details',
    getComponent(nextState, cb){
      import('routes/CasesRoute/CaseDetailsRoute').then(loadModule(cb)).catch(err)
    },
  },{
    path : '/cases',
    name : 'cases',
    getComponent(nextState, cb){
      import('routes/CasesRoute').then(loadModule(cb)).catch(err)
    },
  },{
    path : '/clients',
    name : 'clients',
    getComponent(nextState, cb){
      import('routes/ClientsRoute').then(loadModule(cb)).catch(err)
    },
  },{
    path : '/clients/:clientID',
    name : 'client-details',
    getComponent(nextState, cb){
      import('routes/ClientsRoute/ClientDetailsRoute').then(loadModule(cb)).catch(err)
    },
  },{
    path : '/',
    name : 'dashboard',
    getComponent(nextState, cb){
      import('routes/DashboardRoute').then(loadModule(cb)).catch(err)
    },
  }]

  return [{
    path : '/about',
    name : 'about',
    getComponent(nextState, cb){
      import('routes/AboutRoute').then(loadModule(cb)).catch(err)
    },
  }, ...routes, {
    path : '*',
    name : '404-redirect',
    onEnter: (nextState, replace) => { console.log('yo'); replace('/') }
  }]
}
