//-----------  Imports  -----------//

import * as popsicle             from 'popsicle'

import { prodQuery, webtaskUrl } from 'modules/helpers'

//-----------  Endpoints  -----------//

function ordersAPI(){
  const options = {
    method : 'get',
    query  : prodQuery(),
    url    : webtaskUrl('admin_get_orders'),
  }

  return popsicle.request(options)
    .use(popsicle.plugins.parse(['json']))
}

//-----------  Exports  -----------//

export { ordersAPI }
