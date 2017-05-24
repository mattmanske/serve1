//-----------  Imports  -----------//

import { isRequired } from 'utils/forms'

//-----------  Validation  -----------//

export default function(formValues){
  let { client, contact, ...kase } = formValues
  const errors = { client: {}, contact: {} }

  client  = client || {}
  contact = contact || {}

  //-----------  Client Form  -----------//

  if (!isRequired(client.id))
    errors.client.key = 'Required'

  if (!isRequired(client.name))
    errors.client.name = 'Required'

  if (!isRequired(client.email))
    errors.client.email = 'Required'

  //-----------  Contact Form  -----------//

  if (!isRequired(contact.client))
    errors.contact.key = 'Required'

  if (!isRequired(contact.first_name))
    errors.contact.first_name = 'Required'

  if (!isRequired(contact.last_name))
    errors.contact.last_name = 'Required'

  if (!isRequired(contact.email))
    errors.contact.email = 'Required'

  //-----------  Case Details  -----------//

  if (!isRequired(kase.number))
    errors.number = 'Required'

  if (!isRequired(kase.state))
    errors.state = 'Required'

  if (!isRequired(kase.county))
    errors.county = 'Required'

  if (!isRequired(kase.court_type))
    errors.court_type = 'Required'

  if (!isRequired(kase.plantiff))
    errors.plantiff = 'Required'

  if (!isRequired(kase.defendant))
    errors.defendant = 'Required'

  return errors
}
