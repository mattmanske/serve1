//-----------  Imports  -----------//

import { takeEvery }         from 'redux-saga'
import { call }              from 'redux-saga/effects'

import { ORGANIZATION }      from 'modules/organization/actions'
import { syncRecordSaga,
         updateRecordSaga,
         selectRecordSaga }  from 'modules/sagas'

import { JOBS, sagaActions } from './actions'

//-----------  Definitions  -----------//

const dataType = 'jobs'
const formName = 'job'

//-----------  Sagas  -----------//

function* syncJobsSaga(){
  yield call(syncRecordSaga, dataType, sagaActions)
}

function* updateJobSaga({ job, resolve, reject }){
  yield call(updateRecordSaga, job, dataType, sagaActions, resolve, reject)
}

function* selectJobSaga({ jobID, resolve, reject }){
  yield call(selectRecordSaga, jobID, dataType, formName, resolve, reject)
}

//-----------  Watchers  -----------//

export default function* jobsSagas(){
  yield [
    takeEvery(ORGANIZATION.SUCCESS, syncJobsSaga),
    takeEvery(JOBS.UPDATE, updateJobSaga),
    takeEvery(JOBS.SELECT, selectJobSaga),
  ]
}
