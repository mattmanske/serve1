//-----------  Imports  -----------//

import { isRequired } from 'utils/forms'

//-----------  Service Details Validation  -----------//

export function validateDetails(values){
  const errors = {}

  if (!isRequired(values.serviced_at))
    errors.serviced_at = 'Required'

  if (!isRequired(values.type))
    errors.type = 'Required'

  return errors
}

//-----------  Service Person Validation  -----------//

export function validatePerson(values){
  const errors = {}

  if (!isRequired(values.person_name))
    errors.person_name = 'Required'

  return errors
}

//-----------  Service Notes Validation  -----------//

export function validateNotes(values){
  const errors = {}

  return errors
}
