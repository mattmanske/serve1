//-----------  Imports  -----------//

import { takeEvery }                 from 'redux-saga'
import { put, take, call, select }   from 'redux-saga/effects'

import { RSF, timestamp }            from 'modules/helpers'

import { ORGANIZATION, sagaActions } from './actions'

//-----------  Sagas  -----------//

function* requestOrganizationSaga({ organizationID }){
  // try {
  //   const sweepstakes = yield call(RSF.get, `sweepstakes/${sweepstakesID}`)
  //   const sponsor = yield call(RSF.get, `sponsors/${sweepstakes.sponsor}`)
  //   yield put(sagaActions.success({ ...sweepstakes, sponsor }))
  // } catch(error){
  //   yield put(sagaActions.failure(error))
  // }
}

function* createOrganizationSaga({ attrs, resolve, reject }){
  // try {
  //   const currentUser = yield select(state => state.auth.user)
  //   const token = yield currentUser.getToken()
  //   yield call(submitEntry, token, sweepstakesID)
  //   if (resolve) resolve()
  // } catch(error){
  //   if (reject) reject(error)
  // }
}

//-----------  Watchers  -----------//

export default function* sweepstakesSagas(){
  yield [
    takeEvery(ORGANIZATION.REQUEST, requestOrganizationSaga),
    takeEvery(ORGANIZATION.CREATE, createOrganizationSaga),
  ]
}
