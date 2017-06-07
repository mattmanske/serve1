//-----------  Imports  -----------//

import { isRequired } from 'utils/forms'

//-----------  Attempt Details Validation  -----------//

export function validateDetails(values){
  const errors = {}

  if (!isRequired(values.attemptd_at))
    errors.attemptd_at = 'Required'

  if (!isRequired(values.type))
    errors.type = 'Required'

  return errors
}

//-----------  Attempt Person Validation  -----------//

export function validatePerson(values){
  const errors = {}

  if (!isRequired(values.person_name))
    errors.person_name = 'Required'

  if (!isRequired(values.person_title))
    errors.person_title = 'Required'

  return errors
}

//-----------  Attempt Notes Validation  -----------//

export function validateNotes(values){
  const errors = {}

  return errors
}
