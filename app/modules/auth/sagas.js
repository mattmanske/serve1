//-----------  Imports  -----------//

import firebase                    from 'firebase'
import { takeEvery }               from 'redux-saga'
import { put, take, call, select } from 'redux-saga/effects'

import { RSF }                     from 'modules/helpers'

import { AUTH, sagaActions }       from './actions'

//-----------  Definitions  -----------//

const authProvider = new firebase.auth.GoogleAuthProvider()

//-----------  Sagas  -----------//

function* syncAuthSaga(){
  const channel = yield call(RSF.authChannel)

  while(true){
    const { user, error } = yield take(channel)

    if (user && user.uid)
      yield put(sagaActions.success(user))
    else
      yield put(sagaActions.failure())
  }
}

function* signInSaga(){
  try {
    yield call(RSF.login, authProvider)
  } catch(error){
    yield put(sagaActions.failure(error))
  }
}

function* signOutSaga(){
  try {
    yield call(RSF.logout)
  } catch(error){
    yield put(sagaActions.failure(error))
  }
}

//-----------  Watchers  -----------//

export default function* authSagas(){
  yield [
    takeEvery(AUTH.SYNC, syncAuthSaga),
    takeEvery(AUTH.SIGNIN, signInSaga),
    takeEvery(AUTH.SIGNOUT, signOutSaga),
  ]
}
