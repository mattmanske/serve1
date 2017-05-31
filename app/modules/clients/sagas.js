//-----------  Imports  -----------//

import { takeEvery }               from 'redux-saga'
import { initialize }              from 'redux-form'
import { put, take, call, select } from 'redux-saga/effects'

import { RSF, toKey, timestamp }   from 'modules/helpers'
import { ORGANIZATION }            from 'modules/organization/actions'

import { CLIENTS, sagaActions }    from './actions'

//-----------  Definitions  -----------//

const dbKey = 'clients'

//-----------  Sagas  -----------//

function* syncClientsSaga(){
  const org = yield select(state => state.org)
  const channel = yield call(RSF.channel, `${dbKey}/${org}`)

  while(true){
    const data = yield take(channel)

    if (data) yield put(sagaActions.success(data))
    else yield put(sagaActions.failure())
  }
}

function* updateClientSaga({ client, resolve, reject }){
  try {
    const key = toKey(client.name)
    const org = yield select(state => state.org)


    const record = { created_at: timestamp(), ...client, updated_at: timestamp() }
    console.log(key, record);
    yield call(RSF.patch, `${dbKey}/${org}/${key}`, record)

    if (resolve) resolve(key)
  } catch(error){
    yield put(sagaActions.failure(error))
    if (reject) reject(error)
  }
}

function* selectClientSaga({ clientID, resolve, reject }){
  const client = yield select(state => state.clients.data[clientID])

  if (!client) return reject('No Record Found')

  yield put(initialize('client', { ...client, id: clientID }))
  return resolve(clientID)
}

//-----------  Watchers  -----------//

export default function* clientsSagas(){
  yield [
    takeEvery(ORGANIZATION.SUCCESS, syncClientsSaga),
    takeEvery(CLIENTS.UPDATE, updateClientSaga),
    takeEvery(CLIENTS.SELECT, selectClientSaga),
  ]
}
