//-----------  Imports  -----------//

import { takeEvery }               from 'redux-saga'
import { initialize }              from 'redux-form'
import { put, take, call, select } from 'redux-saga/effects'

import { RSF, timestamp }          from 'modules/helpers'
import { ORGANIZATION }            from 'modules/organization/actions'

import { CASES, sagaActions }      from './actions'

//-----------  Definitions  -----------//

const dbKey = 'cases'

//-----------  Sagas  -----------//

function* syncCasesSaga(){
  const org = yield select(state => state.org)
  const channel = yield call(RSF.channel, `${dbKey}/${org}`)

  while(true){
    const data = yield take(channel)

    if (data) yield put(sagaActions.success(data))
    else yield put(sagaActions.failure())
  }
}

function* updateCaseSaga({ kase, resolve, reject }){
  try {
    let { id, ...attrs } = kase
    const org = yield select(state => state.org)
    const record = { created_at: timestamp(), ...attrs, updated_at: timestamp() }

    yield call(RSF.patch, `${dbKey}/${org}/${id}`, record)

    if (resolve) resolve(id)
  } catch(error){
    yield put(sagaActions.failure(error))
    if (reject) reject(error)
  }
}

function* selectCaseSaga({ kaseID, resolve, reject }){
  const kase = yield select(state => state.cases.data[kaseID])

  if (!kase) return reject('No Record Found')

  yield put(initialize('case', { ...kase, id: kaseID }))
  return resolve(kaseID)
}

//-----------  Watchers  -----------//

export default function* casesSagas(){
  yield [
    takeEvery(ORGANIZATION.SUCCESS, syncCasesSaga),
    takeEvery(CASES.UPDATE, updateCaseSaga),
    takeEvery(CASES.SELECT, selectCaseSaga),
  ]
}
