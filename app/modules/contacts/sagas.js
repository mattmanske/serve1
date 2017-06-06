//-----------  Imports  -----------//

import { takeEvery }             from 'redux-saga'
import { call }                  from 'redux-saga/effects'

import { ORGANIZATION }          from 'modules/organization/actions'
import { syncRecordSaga,
         updateRecordSaga,
         selectRecordSaga }      from 'modules/sagas'

import { CONTACTS, sagaActions } from './actions'

//-----------  Definitions  -----------//

const dataType = 'contacts'
const formName = 'contact'

//-----------  Sagas  -----------//

function* syncContactsSaga(){
  yield call(syncRecordSaga, dataType, sagaActions)
}

function* updateContactSaga({ contact, resolve, reject }){
  yield call(updateRecordSaga, contact, dataType, sagaActions, resolve, reject)
}

function* selectContactSaga({ contactID, resolve, reject }){
  yield call(selectRecordSaga, contactID, dataType, formName, resolve, reject)
}

//-----------  Watchers  -----------//

export default function* contactsSagas(){
  yield [
    takeEvery(ORGANIZATION.SUCCESS, syncContactsSaga),
    takeEvery(CONTACTS.UPDATE, updateContactSaga),
    takeEvery(CONTACTS.SELECT, selectContactSaga),
  ]
}
