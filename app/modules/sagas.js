//-----------  Imports  -----------//

import { initialize }              from 'redux-form'
import { put, take, call, select } from 'redux-saga/effects'

import { RSF, toKey, timestamp }   from 'modules/helpers'

//-----------  Saga Helpers  -----------//

export function* syncRecordSaga(dataType, sagaActions){
  const org = yield select(state => state.org)
  const channel = yield call(RSF.channel, `${dataType}/${org}`)

  while(true){
    const data = yield take(channel)

    if (data) yield put(sagaActions.success(data))
    else yield put(sagaActions.failure())
  }
}

export function* updateRecordSaga(record, dataType, sagaActions, resolve, reject){
  try {
    const org  = yield select(state => state.org)
    const data = { created_at: timestamp(), ...record, updated_at: timestamp() }

    if (record.key){
      delete data.key
      yield call(RSF.update, `${dataType}/${org}/${record.key}`, data)
      if (resolve) resolve(record.key)
    } else {
      const key = yield call(RSF.create, `${dataType}/${org}`, data)
      if (resolve) resolve(key)
    }
  } catch(error){
    yield put(sagaActions.failure(error))
    if (reject) reject(error)
  }
}

export function* selectRecordSaga(recordID, dataType, formName, resolve, reject){
  const record = yield select(state => state[dataType].data[recordID])

  if (!record) return reject('No Record Found')

  yield put(initialize(formName, { ...record, key: recordID }))
  return resolve(recordID)
}
