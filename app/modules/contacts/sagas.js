//-----------  Imports  -----------//

import { takeEvery }               from 'redux-saga'
import { destroy, initialize }     from 'redux-form'
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

function* updateContactSaga({ contact, resolve, reject }){
  try {
    let { id, client, ...attrs } = contact
    const org = yield select(state => state.org)
    const record = { created_at: timestamp(), ...attrs, updated_at: timestamp() }

    if (id) yield call(RSF.patch, `${dbKey}/${org}/${client}/${id}`, record)
    else id = yield call(RSF.create, `${dbKey}/${org}/${client}`, record)

    if (resolve) resolve(id)
  } catch(error){
    yield put(sagaActions.failure(error))
    if (reject) reject(error)
  }
}

function* selectContactSaga({ clientID, contactID, resolve, reject }){
  if (!clientID || !contactID){
    yield put(destory('contact'))
  } else {
    const contact = yield select(state => state.contacts.data[clientID][contactID])
    if (!contact && reject) return reject('No Record Found')
    yield put(initialize('contact', { ...contact, id: contactID, client: clientID }))
  }

  resolve(contactID)
}

//-----------  Watchers  -----------//

export default function* contactsSagas(){
  yield [
    takeEvery(ORGANIZATION.SUCCESS, syncContactsSaga),
    takeEvery(CONTACTS.UPDATE, updateContactSaga),
    takeEvery(CONTACTS.SELECT, selectContactSaga),
  ]
}
