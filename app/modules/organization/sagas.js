//-----------  Imports  -----------//

import { takeEvery }                 from 'redux-saga'
import { put, take, call, select }   from 'redux-saga/effects'

import { RSF, _empty, timestamp }    from 'modules/helpers'

import { ORGANIZATION, sagaActions } from './actions'

//-----------  Sagas  -----------//

function* requestOrganizationSaga({ organizationID }){
  try {
    const organization = yield call(RSF.get, `organizations/${organizationID}`)
    yield put(sagaActions.success(organization))
  } catch(error){
    yield put(sagaActions.failure(error))
  }
}

function* createOrganizationSaga({ organization, resolve, reject }){
  const { id, ...attrs } = organization

  if (!id || 'www' == id) return reject('Invalid Organization ID')

  try {
    const { uid } = yield select(state => state.auth.user)

    const newOrganization = {
      ...attrs,
      jobs              : _empty,
      cases             : _empty,
      clients           : _empty,
      parties           : _empty,
      services          : _empty,
      attempts          : _empty,
      documents         : _empty,
      affidavits        : _empty,
      client_contacts   : _empty,
      service_documents : _empty,
      created_by        : uid,
      created_at        : timestamp(),
      updated_at        : timestamp(),
    }

    yield call(RSF.patch, `organizations/${id}`, newOrganization)
    yield call(RSF.patch, `permissions/${id}`, { [uid]: 'admin' })
    if (resolve) resolve(id)
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
