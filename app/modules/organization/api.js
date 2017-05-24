//-----------  Imports  -----------//

import * as popsicle    from 'popsicle'
import status           from 'popsicle-status'

import { prodQuery,
         functionsUrl,
         errorHandler } from 'modules/helpers'

//-----------  Endpoints  -----------//

function createOrganization(token, organization){
  const options = {
    method  : 'POST',
    query   : prodQuery(),
    body    : { organization },
    url     : functionsUrl('createOrganization'),
    headers : { Authorization: `Bearer ${token}` },
  }

  return popsicle.request(options)
    .use(errorHandler())
    .use(popsicle.plugins.parse(['json']))
}

//-----------  Exports  -----------//

export {
  createOrganization
}
