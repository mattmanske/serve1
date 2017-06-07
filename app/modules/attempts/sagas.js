//-----------  Imports  -----------//

import { takeEvery }             from 'redux-saga'
import { call }                  from 'redux-saga/effects'

import { ORGANIZATION }          from 'modules/organization/actions'
import { syncRecordSaga,
         updateRecordSaga }      from 'modules/sagas'

import { SERVICES, sagaActions } from './actions'

//-----------  Definitions  -----------//

const dataType = 'attempts'
const formName = 'attempt'

//-----------  Sagas  -----------//

function* syncAttemptsSaga(){
  yield call(syncRecordSaga, dataType, sagaActions)
}

function* updateAttemptSaga({ attempt, resolve, reject }){
  yield call(updateRecordSaga, { status: 'dispatched', ...attempt }, dataType, sagaActions, resolve, reject)
}

//-----------  Watchers  -----------//

export default function* attemptsSagas(){
  yield [
    takeEvery(ORGANIZATION.SUCCESS, syncAttemptsSaga),
    takeEvery(SERVICES.UPDATE, updateAttemptSaga),
  ]
}
