//-----------  Imports  -----------//

import { takeEvery }               from 'redux-saga'
import { initialize }              from 'redux-form'
import { put, take, call, select } from 'redux-saga/effects'

import { RSF, toKey, timestamp }   from 'modules/helpers'
import { ORGANIZATION }            from 'modules/organization/actions'

import { JOBS, sagaActions }       from './actions'

//-----------  Definitions  -----------//

const dbKey = 'jobs'

//-----------  Sagas  -----------//

function* syncJobsSaga(){
  const org = yield select(state => state.org)
  const channel = yield call(RSF.channel, `${dbKey}/${org}`)

  while(true){
    const data = yield take(channel)

    if (data) yield put(sagaActions.success(data))
    else yield put(sagaActions.failure())
  }
}

function* updateJobSaga({ job, resolve, reject }){
  try {
    const key = toKey(job.id)
    const org = yield select(state => state.org)

    const record = { created_at: timestamp(), ...job, updated_at: timestamp() }
    yield call(RSF.patch, `${dbKey}/${org}/${key}`, record)

    if (resolve) resolve(key)
  } catch(error){
    yield put(sagaActions.failure(error))
    if (reject) reject(error)
  }
}

function* selectJobSaga({ jobID, resolve, reject }){
  const job = yield select(state => state.jobs.data[jobID])

  if (!job) return reject('No Record Found')

  yield put(initialize('job', { ...job, id: jobID }))
  return resolve(jobID)
}

//-----------  Watchers  -----------//

export default function* jobsSagas(){
  yield [
    takeEvery(ORGANIZATION.SUCCESS, syncJobsSaga),
    takeEvery(JOBS.UPDATE, updateJobSaga),
    takeEvery(JOBS.SELECT, selectJobSaga),
  ]
}
