//-----------  Imports  -----------//

import flatMap from 'lodash/flatMap'

//-----------  Utilities  -----------//

export function recordsToArray(records){
  return flatMap(records, (record, key) => ({ key, ...record }))
}

export function extendRecords(state, type, attachments){
  if (!state[type]) return false

  let data = Object.assign({}, state[type].data)

  // attachments.forEach(attach)

  return Object.assign({}, state[type], { data })
}
