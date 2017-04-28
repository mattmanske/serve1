//-----------  Imports  -----------//

import { takeEvery }               from 'redux-saga'
import { put, take, call, select } from 'redux-saga/effects'

import { RSF_SITE }                from 'modules/helpers'
import { AUTH }                    from 'modules/auth/actions'

import { ORDERS, sagaActions }     from './actions'

//-----------  Sagas  -----------//

function* syncOrdersSaga(){
  const channel = yield call(RSF_SITE.channel, 'customers')

  while(true){
    const data = yield take(channel)

    if (data) yield put(sagaActions.success(data))
    else yield put(sagaActions.failure())
  }
}


//-----------  Watchers  -----------//

export default function* ordersSagas(){
  yield [
    takeEvery(AUTH.SYNC, syncOrdersSaga)
  ]
}
