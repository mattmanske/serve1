//-----------  Imports  -----------//

import { combineReducers }              from 'redux'
import { reducer as formReducer }       from 'redux-form'
import { LOCATION_CHANGE }              from 'react-router-redux'
import { createResponsiveStateReducer } from 'redux-responsive'
import useragent                        from 'express-useragent'

import authReducer                      from 'modules/auth/reducer'
import jobsReducer                      from 'modules/jobs/reducer'
import modalReducer                     from 'modules/modal/reducer'
import casesReducer                     from 'modules/cases/reducer'
import clientsReducer                   from 'modules/clients/reducer'
import contactsReducer                  from 'modules/contacts/reducer'
import organizationReducer              from 'modules/organization/reducer'

//-----------  Definitions  -----------//

const routeInitialState = { locationBeforeTransitions: null }

function routeReducer(state = routeInitialState, action){
  switch (action.type){
    case LOCATION_CHANGE:
      return Object.assign({}, state, { locationBeforeTransitions: action.payload })
    default:
      return state
  }
}

function initialMediaType(){
  const ua = new useragent.UserAgent().parse(navigator.userAgent) || {}
  let mediaType = 'large'

  if (ua.isMobile)  mediaType = 'small'
  if (ua.isTablet)  mediaType = 'medium'
  if (ua.isDesktop) mediaType = 'large'

  return mediaType
}

//-----------  Exports  -----------//

export default function createReducer(domain, subdomain){
  return combineReducers({
    org          : () => subdomain,
    site         : () => domain,
    form         : formReducer,
    auth         : authReducer,
    jobs         : jobsReducer,
    route        : routeReducer,
    modal        : modalReducer,
    cases        : casesReducer,
    clients      : clientsReducer,
    contacts     : contactsReducer,
    organization : organizationReducer,
    browser: createResponsiveStateReducer(null, { initialMediaType: initialMediaType() }),
  })
}
