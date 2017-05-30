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

//-----------  Fiorebase Helpers  -----------//

export const _empty = { _empty: false }

export function toKey(id){
  const a = 'àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;.'
  const b = 'aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh-------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return id.toString().toLowerCase()
    .replace(/[\[\]$#]+/g, '')      // Replace non-firebase characters
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(p, c =>
        b.charAt(a.indexOf(c)))     // Replace special chars
    .replace(/&/g, '-and-')         // Replace & with 'and'
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '')             // Trim - from end of text
}

//-----------  Remote Helpers  -----------//

const SYNC    = 'SYNC'
const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

export function timestamp(){
  return moment.utc().toISOString()
}

export function action(type, payload = {}){
  return { type, ...payload }
}

export function createActionConstants(base, types = []){
  const typeArr = [SYNC, REQUEST, SUCCESS, FAILURE, ...types]
  const res = {}

  typeArr.forEach(type => res[type] = `${base}_${type}`)
  return res
}

//-----------  API Helpers  -----------//

export function prodQuery(){
  return ('production' == process.env.NODE_ENV) ? { prod: true } : {}
}

export function functionsUrl(functionName){
  return `${process.env.FIREBASE_FUNCTIONS_DOMAIN}/serve1/${functionName}`
}

export function errorHandler(){
  return function (req, next){
    return next().then(res => {
      if (res.status >= 200 && res.status <= 399) return res
      else throw { status: res.status, error: res.body }
    })
  }
}
