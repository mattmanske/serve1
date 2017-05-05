//-----------  Imports  -----------//

import { takeLatest, takeEvery } from 'redux-saga'
import { put, take, call }       from 'redux-saga/effects'

import { RSF_ADMIN, timestamp }  from 'modules/helpers'
import { AUTH }                  from 'modules/auth/actions'

import { SHOWS, sagaActions }    from './actions'

//-----------  Sagas  -----------//

function* syncShowsSaga(){
  const channel = yield call(RSF_ADMIN.channel, 'shows')

  while(true){
    const data = yield take(channel)

    if (data) yield put(sagaActions.success(data))
    else yield put(sagaActions.failure())
  }
}

function* createShowSaga({ show, resolve, reject }){
  try {
    const key = yield call(RSF_ADMIN.create, 'shows', timestamp(show))
    if (resolve) yield resolve({ key, ...show })
  } catch(error){
    yield put(sagaActions.failure(error, reject))
  }
}

function* updateShowSaga({ show, resolve, reject }){
  try {
    const { key, ...attrs } = show
    yield call(RSF_ADMIN.patch, `shows/${key}`, timestamp(attrs))
    if (resolve) yield resolve(show)
  } catch(error){
    yield put(sagaActions.failure(error, reject))
  }
}

function* deleteShowSaga({ showID, resolve, reject }){
  try {
    yield call(RSF_ADMIN.delete, `shows/${showID}`)
    if (resolve) yield resolve(showID)
  } catch(error){
    yield put(sagaActions.failure(error, reject))
  }
}

//-----------  Watchers  -----------//

export default function* showsSagas(){
  yield [
    takeLatest(AUTH.SUCCESS, syncShowsSaga),
    takeEvery(SHOWS.CREATE, createShowSaga),
    takeEvery(SHOWS.UPDATE, updateShowSaga),
    takeEvery(SHOWS.DELETE, deleteShowSaga),
  ]
}
