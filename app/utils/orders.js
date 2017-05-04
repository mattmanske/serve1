//-----------  Imports  -----------//

import vars from 'styles/variables'

//-----------  Constants  -----------//

export const STATUSES = ['fulfilled', 'paid', 'created', 'canceled']

//-----------  Helpers  -----------//

export function orderStatusText(status){
  switch (status){
    case 'fulfilled' : return 'Shipped'
    case 'canceled'  : return 'Canceled'
    case 'created'   : return 'Unpaid'
    case 'paid'      : return 'Needs to be Shipped'
    default          : return ''
  }
}

export function orderStatusColor(status){
  switch (status){
    case 'fulfilled' : return vars.green
    case 'canceled'  : return vars.red
    case 'created'   : return vars.yellow
    case 'paid'      : return vars.blue
    default          : return vars.gray
  }
}

export function orderStatusIcon(status, open = true){
  switch (status){
    case 'fulfilled' : return `check-circle${open ? '-o' : ''}`
    case 'canceled'  : return `close-circle${open ? '-o' : ''}`
    case 'created'   : return `exclamation-circle${open ? '-o' : ''}`
    case 'paid'      : return `plus-circle${open ? '-o' : ''}`
    default          : return ''
  }
}
