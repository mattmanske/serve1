//-----------  Imports  -----------//

import flatMap from 'lodash/flatMap'

//-----------  Utilities  -----------//

export function recordsToArray(records){
  return flatMap(records, (record, key) => ({ key, ...record }))
}
