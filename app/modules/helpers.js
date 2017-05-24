//-----------  Imports  -----------//

import moment              from 'moment'

import * as firebase       from 'firebase'
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
const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

export const _empty = { _empty: false }

export function timestamp(){
  return moment.utc().toISOString()
}

export function action(type, payload = {}){
  return { type, ...payload }
}

export const createActionConstants = (base, types = []) => {
  const typeArr = [SYNC, REQUEST, SUCCESS, FAILURE, ...types]
  const res = {}

  typeArr.forEach(type => res[type] = `${base}_${type}`)
  return res
}

//-----------  API Helpers  -----------//

export function prodQuery(){
  return ('production' == process.env.NODE_ENV) ? { prod: true } : {}
}

// export function functionsUrl(functionName){
//   return `https://us-central1-sweepster-1f5e0.cloudfunctions.net/sweepster/${functionName}`
// }

export function errorHandler(){
  return function (req, next){
    return next().then(res => {
      if (res.status >= 200 && res.status <= 399) return res
      else throw { status: res.status, error: res.body }
    })
  }
}
