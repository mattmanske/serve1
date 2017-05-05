//-----------  Imports  -----------//

import { takeLatest, takeEvery } from 'redux-saga'
import { put, take, call }       from 'redux-saga/effects'

import { RSF_ADMIN, timestamp }  from 'modules/helpers'
import { AUTH }                  from 'modules/auth/actions'

import { MEMBERS, sagaActions }  from './actions'

//-----------  Sagas  -----------//

function* syncMembersSaga(){
  const channel = yield call(RSF_ADMIN.channel, 'members')

  while(true){
    const data = yield take(channel)

    if (data) yield put(sagaActions.success(data))
    else yield put(sagaActions.failure())
  }
}

function* createMemberSaga({ member, resolve, reject }){
  try {
    const key = yield call(RSF_ADMIN.create, 'members', timestamp(member))
    if (resolve) yield resolve({ key, ...member })
  } catch(error){
    yield put(sagaActions.failure(error, reject))
  }
}

function* updateMemberSaga({ member, resolve, reject }){
  try {
    const { key, ...attrs } = member
    yield call(RSF_ADMIN.patch, `members/${key}`, timestamp(attrs))
    if (resolve) yield resolve(member)
  } catch(error){
    yield put(sagaActions.failure(error, reject))
  }
}

//-----------  Watchers  -----------//

export default function* membersSagas(){
  yield [
    takeLatest(AUTH.SUCCESS, syncMembersSaga),
    takeEvery(MEMBERS.CREATE, createMemberSaga),
    takeEvery(MEMBERS.UPDATE, updateMemberSaga),
  ]
}
