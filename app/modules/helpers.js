//-----------  Imports  -----------//

import moment              from 'moment'

import * as firebase       from 'firebase'
import { SubmissionError } from 'redux-form'
import { select }          from 'redux-saga/effects'
import ReduxSagaFirebase   from 'redux-saga-firebase'

// ----------- Firebase Setup -----------//

const firebaseApp = firebase.initializeApp({
  apiKey      : process.env.FIREBASE_API_KEY,
  authDomain  : `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL : `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
});

export const RSF = new ReduxSagaFirebase(firebaseApp)

//-----------  Remote Helpers  -----------//

const SYNC    = 'SYNC'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

export const action = (type, payload = {}) => ({ type, ...payload })

export const timestamp = (object, status = false) => {
  const createdAt = moment.utc().toString()
  const updatedAt = moment.utc().toString()

  if (status)
    return { createdAt, status: 'draft', ...object, updatedAt }
  else
    return { createdAt, ...object, updatedAt }
}

export const createActionConstants = (base, types = []) => {
  const typeArr = [SYNC, SUCCESS, FAILURE, ...types]
  const res = {}

  typeArr.forEach(type => res[type] = `${base}_${type}`)
  return res
}

// TODO: Protect against duplicate channel syncing...

//-----------  API Helpers  -----------//

export const reduxStatus = (lower = 200, upper = 399) => {
  return function (req, next){
    return next().then(res => {
      if (res.status >= lower && res.status <= upper)
        return res
      else
        throw new SubmissionError({ _error: res.body })
    })
  }
}
