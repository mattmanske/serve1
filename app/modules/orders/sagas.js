//-----------  Imports  -----------//

import { takeEvery }               from 'redux-saga'
import { put, take, call, select } from 'redux-saga/effects'

import { RSF }                     from 'modules/helpers'

import { ORDERS, sagaActions }       from './actions'

//-----------  Sagas  -----------//

function* syncOrdersSaga(){
  const channel = yield call(RSF.channel, 'orders')

  while(true){
    const data = yield take(channel)

    if (data) yield put(sagaActions.success(data))
    else yield put(sagaActions.failure())
  }
}


//-----------  Watchers  -----------//

export default function* ordersSagas(){
  yield [
    takeEvery(ORDERS.SYNC, syncOrdersSaga)
  ]
}
