//-----------  Imports  -----------//

import { action } from 'modules/helpers'

//-----------  Definitions  -----------//

export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'

//-----------  Actions  -----------//

export const modalActions = {
  showModal: (child, props, options) => {
    return action(SHOW_MODAL, { child, props, options })
  },
  hideModal: () => {
    return action(HIDE_MODAL)
  }
}
