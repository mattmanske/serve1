//-----------  Imports  -----------//

import 'babel-polyfill'

import './styles/globals'

import 'file-loader?name=[name].[ext]!./static/.htaccess'
import '!file-loader?name=[name].[ext]!./static/favicon.ico'
import '!file-loader?name=[name].[ext]!./static/manifest.json'

import React                     from 'react'
import ReactDOM                  from 'react-dom'
import { Provider }              from 'react-redux'
import { LocaleProvider }        from 'antd'
import { createHistory }         from 'history'
import { Router,
         useRouterHistory,
         applyRouterMiddleware } from 'react-router'
import { syncHistoryWithStore }  from 'react-router-redux'
import { useScroll }             from 'react-router-scroll'
import enUS                      from 'antd/lib/locale-provider/en_US'

import configureStore            from './store'
import createRoutes              from './routes'

import AppWrapper                from 'containers/AppWrapper'

//-----------  Definitions  -----------//

const isProd = ('production' == process.env.NODE_ENV)

//-----------  Subdomain & Oragnizations  -----------//

const { port, protocol, hostname } = window.location
const hasOrg = ((hostname.split('.').length >= 3) && ('www' != hostname.split('.')[0]))

const subdomain = (hasOrg) ? hostname.split('.')[0] : false
const domainUrl = (hasOrg) ? hostname.substring(hostname.indexOf('.') + 1) : hostname
const domain    = port ? `${protocol}//${domainUrl}:${port}` : `${protocol}//${domainUrl}`

//-----------  Redux Setups  -----------//

// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)()`

const initialState   = {}
const browserHistory = useRouterHistory(createHistory)({
  basename: (isProd) ? '/serve1' : ''
})

const store = configureStore(initialState, browserHistory, domain, subdomain)

// Sync history and store, as the react-router-redux reducer
// is under the non-default key ("routing"), selectLocationState
// must be provided for resolving how to retrieve the "route" in the state

const makeSelectLocationState = () => {
  return (state) => state.route
}

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: makeSelectLocationState(),
})

//-----------  Router Setups  -----------//

const rootRoute = {
  component   : AppWrapper,
  childRoutes : createRoutes(store, subdomain),
}

ReactDOM.render(
  <LocaleProvider locale={enUS}>
    <Provider store={store}>
      <Router
        history={history}
        routes={rootRoute}
        render={applyRouterMiddleware(useScroll())}
      />
    </Provider>
  </LocaleProvider>,
  document.getElementById('app')
)

//-----------  Offline Setup  -----------//

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed

if (isProd) require('offline-plugin/runtime').install()
