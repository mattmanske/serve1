//-----------  Imports  -----------//

import { SubmissionError } from 'redux-form'

//-----------  Remote Definitions  -----------//

export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

//-----------  Remote Actions  -----------//

export const action = (type, payload = {}) =>{
  return { type, ...payload }
}

export const createRequestTypes = (base, ...types) => {
  const typeArr = [REQUEST, SUCCESS, FAILURE, ...types]
  const res = {}

  typeArr.forEach(type => res[type] = `${base}_${type}`)
  return res
}

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
