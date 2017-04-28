//-----------  Imports  -----------//

import * as popsicle             from 'popsicle'

import { prodQuery, webtaskUrl } from 'modules/helpers'

//-----------  Endpoints  -----------//

function getOrders(){
  const options = {
    method : 'get',
    query  : prodQuery(),
    url    : webtaskUrl('admin_get_orders'),
  }

  return popsicle.request(options)
    .use(popsicle.plugins.parse(['json']))
}

function updateOrderStatus(orderID, status){
  const options = {
    method : 'post',
    body   : { orderID, status },
    query  : prodQuery(),
    url    : webtaskUrl('admin_ship_order'),
  }

  return popsicle.request(options)
    .use(popsicle.plugins.parse(['json']))
}

//-----------  Exports  -----------//

export { getOrders, updateOrderStatus }
