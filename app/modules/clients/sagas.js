//-----------  Imports  -----------//

import { takeEvery }            from 'redux-saga'
import { call }                 from 'redux-saga/effects'

import { ORGANIZATION }         from 'modules/organization/actions'
import { syncRecordSaga,
         updateRecordSaga,
         selectRecordSaga }     from 'modules/sagas'

import { CLIENTS, sagaActions } from './actions'

//-----------  Definitions  -----------//

const dataType = 'clients'
const formName = 'client'

//-----------  Sagas  -----------//

function* syncClientsSaga(){
  yield call(syncRecordSaga, dataType, sagaActions)
}

function* updateClientSaga({ client, resolve, reject }){
  yield call(updateRecordSaga, client, dataType, sagaActions, resolve, reject)
}

function* selectClientSaga({ clientID, resolve, reject }){
  yield call(selectRecordSaga, clientID, dataType, formName, resolve, reject)
}

//-----------  Watchers  -----------//

export default function* clientsSagas(){
  yield [
    takeEvery(ORGANIZATION.SUCCESS, syncClientsSaga),
    takeEvery(CLIENTS.UPDATE, updateClientSaga),
    takeEvery(CLIENTS.SELECT, selectClientSaga),
  ]
}
