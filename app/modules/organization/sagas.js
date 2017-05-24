//-----------  Imports  -----------//

import { takeEvery }                 from 'redux-saga'
import { put, take, call, select }   from 'redux-saga/effects'

import { RSF }                       from 'modules/helpers'

import { ORGANIZATION, sagaActions } from './actions'
import { createOrganization }        from './api'

//-----------  Sagas  -----------//

function* requestOrganizationSaga(){
  try {
    const id = yield select(state => state.org)
    const organization = yield call(RSF.get, `organizations/${id}`)
    yield put(sagaActions.success(organization))
  } catch(error){
    yield put(sagaActions.failure(error))
  }
}

function* createOrganizationSaga({ organization, resolve, reject }){
  try {
    const currentUser = yield select(state => state.auth.user)
    const userToken   = yield currentUser.getToken()

    const { body } = yield call(createOrganization, userToken, organization)
    if (resolve) resolve(body)
  } catch(error){
    if (reject) reject(error)
  }
}

//-----------  Watchers  -----------//

export default function* sweepstakesSagas(){
  yield [
    takeEvery(ORGANIZATION.REQUEST, requestOrganizationSaga),
    takeEvery(ORGANIZATION.CREATE, createOrganizationSaga),
  ]
}
