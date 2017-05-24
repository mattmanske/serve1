//-----------  Imports  -----------//

import { action, createActionConstants } from 'modules/helpers'

//-----------  Definitions  -----------//

export const CONTACTS = createActionConstants('CONTACTS', ['UPDATE'])

//-----------  Contacts Actions  -----------//

export const contactsActions = {
  sync: () => {
    return action(CONTACTS.SYNC)
  },
  update: (clientID, contact, resolve, reject) => {
    return action(CONTACTS.UPDATE, { clientID, contact, resolve, reject })
  }
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => {
    return action(CONTACTS.SUCCESS, { data })
  },
  failure: (error = null) => {
    return action(CONTACTS.FAILURE, { error })
  }
}
