//-----------  Imports  -----------//

import { takeLatest }         from 'redux-saga'
import { put, take, call }    from 'redux-saga/effects'

import { RSF_ADMIN }          from 'modules/helpers'
import { AUTH }               from 'modules/auth/actions'

import { SHOWS, sagaActions } from './actions'

//-----------  Sagas  -----------//

function* syncShowsSaga(){
  const channel = yield call(RSF_ADMIN.channel, 'shows')

  while(true){
    const data = yield take(channel)

    if (data) yield put(sagaActions.success(data))
    else yield put(sagaActions.failure())
  }
}


//-----------  Watchers  -----------//

export default function* showsSagas(){
  yield [
    takeLatest(AUTH.SUCCESS, syncShowsSaga)
  ]
}
