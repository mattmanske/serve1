//-----------  Imports  -----------//

import { takeEvery }               from 'redux-saga'
import { put, take, call, select } from 'redux-saga/effects'

import { RSF, timestamp }          from 'modules/helpers'
import { ORGANIZATION }            from 'modules/organization/actions'

import { CONTACTS, sagaActions }   from './actions'

//-----------  Definitions  -----------//

const dbKey = 'client_contacts'

//-----------  Sagas  -----------//

function* syncContactsSaga(){
  const org = yield select(state => state.org)
  const channel = yield call(RSF.channel, `${dbKey}/${org}`)

  while(true){
    const data = yield take(channel)

    if (data) yield put(sagaActions.success(data))
    else yield put(sagaActions.failure())
  }
}

function* updateContactSaga({ clientID, contact, resolve, reject }){
  try {
    let { id, ...attrs } = contact
    const org = yield select(state => state.org)
    const record = { created_at: timestamp(), ...attrs, updated_at: timestamp() }

    if (id) yield call(RSF.patch, `${dbKey}/${org}/${clientID}/${id}`, record)
    else id = yield call(RSF.create, `${dbKey}/${org}/${clientID}`, record)

    if (resolve) resolve(id)
  } catch(error){
    yield put(sagaActions.failure(error))
    if (reject) reject(error)
  }
}

//-----------  Watchers  -----------//

export default function* contactsSagas(){
  yield [
    takeEvery(ORGANIZATION.SUCCESS, syncContactsSaga),
    takeEvery(CONTACTS.UPDATE, updateContactSaga),
  ]
}
