//-----------  Imports  -----------//

import isEmpty   from 'lodash/isEmpty'
import toArray   from 'lodash/toArray'
import mapValues from 'lodash/mapValues'

//-----------  Utilities  -----------//

export function recordsToArray(records, isLoading, empty = false){
  delete records['_empty']
  const withID = mapValues(records, (obj, id) => ({ ...obj, id }))
  return (!isEmpty(withID) || empty) ? toArray(withID) : [{ text: (isLoading ? 'Loading...' : 'No Records') }]
}

export function toSlug(text){
  const a = 'àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
  const b = 'aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(p, c =>
        b.charAt(a.indexOf(c)))     // Replace special chars
    .replace(/&/g, '-and-')         // Replace & with 'and'
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '')             // Trim - from end of text
}
