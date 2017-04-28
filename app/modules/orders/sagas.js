//-----------  Imports  -----------//

import { takeEvery }           from 'redux-saga'
import { put, call }           from 'redux-saga/effects'

import { STRIPE }              from 'modules/helpers'
import { AUTH }                from 'modules/auth/actions'

import { ORDERS, sagaActions } from './actions'
import { getOrders,
         updateOrderStatus }   from './api'

//-----------  Sagas  -----------//

function* fetchOrdersSaga(){
  try {
    const { body: { data, has_more }} = yield call(getOrders)
    yield put(sagaActions.success(data, has_more))
  } catch (err){
    yield put(sagaActions.failure(err))
  }
}

function* shipOrderSaga({ orderID, status }){
  try {
    const { body: { data, has_more }} = yield call(updateOrderStatus, orderID, status)
    yield put(sagaActions.success(data, has_more))
  } catch (err){
    yield put(sagaActions.failure(err))
  }
}

//-----------  Watchers  -----------//

export default function* ordersSagas(){
  yield [
    takeEvery(AUTH.SUCCESS, fetchOrdersSaga),
    takeEvery(ORDERS.REQUEST, fetchOrdersSaga),
    takeEvery(ORDERS.SHIP, shipOrderSaga),
  ]
}
