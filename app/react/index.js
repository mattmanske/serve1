//-----------  Imports  -----------//

import RWR, { integrationsManager } from 'react-webpack-rails'
import injectTapEventPlugin         from 'react-tap-event-plugin'
import RWRRedux                     from 'rwr-redux'

import ReduxStore                   from './store/redux-store'
import RegistrationForm             from './containers/registration-form'

//-----------  Initialization  -----------//

RWR.run()
injectTapEventPlugin()

integrationsManager.register('redux-store', RWRRedux.storeIntegrationWrapper)
integrationsManager.register('redux-container', RWRRedux.containerIntegrationWrapper)

//-----------  Component Registration  -----------//

RWRRedux.registerStore('ReduxStore', ReduxStore)
RWRRedux.registerContainer('RegistrationForm', RegistrationForm)
