//-----------  Imports  -----------//

import { takeEvery }             from 'redux-saga'
import { call }                  from 'redux-saga/effects'

import { ORGANIZATION }          from 'modules/organization/actions'
import { syncRecordSaga,
         updateRecordSaga,
         selectRecordSaga }      from 'modules/sagas'

import { PARTIES, sagaActions } from './actions'

//-----------  Definitions  -----------//

const dataType = 'parties'
const formName = 'service'

//-----------  Sagas  -----------//

function* syncPartiesSaga(){
  yield call(syncRecordSaga, dataType, sagaActions)
}

function* updateServiceSaga({ service, resolve, reject }){
  yield call(updateRecordSaga, service, dataType, sagaActions, resolve, reject)
}

function* selectServiceSaga({ serviceID, resolve, reject }){
  yield call(selectRecordSaga, serviceID, dataType, formName, resolve, reject)
}

//-----------  Watchers  -----------//

export default function* partiesSagas(){
  yield [
    takeEvery(ORGANIZATION.SUCCESS, syncPartiesSaga),
    takeEvery(PARTIES.UPDATE, updateServiceSaga),
    takeEvery(PARTIES.SELECT, selectServiceSaga),
  ]
}
