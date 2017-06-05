//-----------  Imports  -----------//

import { action, createActionConstants } from 'modules/helpers'

//-----------  Definitions  -----------//

export const CONTACTS = createActionConstants('CONTACTS', ['UPDATE', 'SELECT'])

//-----------  Contacts Actions  -----------//

export const contactsActions = {
  sync: () => {
    return action(CONTACTS.SYNC)
  },
  update: (contact, resolve, reject) => {
    return action(CONTACTS.UPDATE, { contact, resolve, reject })
  },
  select: (contactID, resolve, reject) => {
    return action(CONTACTS.SELECT, { contactID, resolve, reject })
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
