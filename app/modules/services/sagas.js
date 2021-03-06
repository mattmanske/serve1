//-----------  Imports  -----------//

import { takeEvery }             from 'redux-saga'
import { call }                  from 'redux-saga/effects'

import { ORGANIZATION }          from 'modules/organization/actions'
import { syncRecordSaga,
         updateRecordSaga }      from 'modules/sagas'

import { SERVICES, sagaActions } from './actions'

//-----------  Definitions  -----------//

const dataType = 'services'
const formName = 'service'

//-----------  Sagas  -----------//

function* syncServicesSaga(){
  yield call(syncRecordSaga, dataType, sagaActions)
}

function* updateServiceSaga({ service, resolve, reject }){
  yield call(updateRecordSaga, { status: 'dispatched', ...service }, dataType, sagaActions, resolve, reject)
}

//-----------  Watchers  -----------//

export default function* servicesSagas(){
  yield [
    takeEvery(ORGANIZATION.SUCCESS, syncServicesSaga),
    takeEvery(SERVICES.UPDATE, updateServiceSaga),
  ]
}
