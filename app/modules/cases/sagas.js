//-----------  Imports  -----------//

import { takeEvery }          from 'redux-saga'
import { call }               from 'redux-saga/effects'

import { ORGANIZATION }       from 'modules/organization/actions'
import { syncRecordSaga,
         updateRecordSaga,
         selectRecordSaga }   from 'modules/sagas'

import { CASES, sagaActions } from './actions'

//-----------  Definitions  -----------//

const dataType = 'cases'
const formName = 'case'

//-----------  Sagas  -----------//

function* syncCasesSaga(){
  yield call(syncRecordSaga, dataType, sagaActions)
}

function* updateCaseSaga({ kase, resolve, reject }){
  yield call(updateRecordSaga, kase, dataType, sagaActions, resolve, reject)
}

function* selectCaseSaga({ kaseID, resolve, reject }){
  yield call(selectRecordSaga, kaseID, dataType, formName, resolve, reject)
}

//-----------  Watchers  -----------//

export default function* casesSagas(){
  yield [
    takeEvery(ORGANIZATION.SUCCESS, syncCasesSaga),
    takeEvery(CASES.UPDATE, updateCaseSaga),
    takeEvery(CASES.SELECT, selectCaseSaga),
  ]
}
