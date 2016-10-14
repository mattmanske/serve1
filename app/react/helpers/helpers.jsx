//-----------  Imports  -----------//

import _ from 'lodash'

//-----------  Get Input Values  -----------//

const getVal = (ref, refs) => {
  return refs[ref] && refs[ref].getValue()
}

//-----------  URL String Templates  -----------//

const getUrl = (string, values) => {
  return _.template(string)(values)
}

//-----------  URL String Templates  -----------//

const ajaxSuccess = (err, res) => {
  return !(err || !res.ok)
}

//-----------  Convert to Subdomain  -----------//

const convertToSubdomain = (string) => {
  return string.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()
}

//-----------  Exports  -----------//

export { getVal, getUrl, ajaxSuccess, convertToSubdomain }
