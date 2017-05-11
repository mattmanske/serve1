//-----------  Imports  -----------//

import { takeLatest }             from 'redux-saga'
import { put, take, call }        from 'redux-saga/effects'

import { RSF_SITE, timestamp }    from 'modules/helpers'
import { AUTH }                   from 'modules/auth/actions'

import { CUSTOMERS, sagaActions } from './actions'

//-----------  Sagas  -----------//

function* syncCustomersSaga(){
  const channel = yield call(RSF_SITE.channel, 'customers')

  while(true){
    const data = yield take(channel)

    if (data) yield put(sagaActions.success(data))
    else yield put(sagaActions.failure())
  }
}


//-----------  Watchers  -----------//

export default function* customersSagas(){
  yield [
    takeLatest(AUTH.SUCCESS, syncCustomersSaga)
  ]
}
