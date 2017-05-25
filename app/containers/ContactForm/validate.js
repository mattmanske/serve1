//-----------  Imports  -----------//

import { isRequired } from 'utils/forms'

//-----------  Validation  -----------//

export default function(values){
  const errors = {}

  if (!isRequired(values.id))
    errors.id = 'Required'

  if (!isRequired(values.first_name))
    errors.first_name = 'Required'

  if (!isRequired(values.last_name))
    errors.last_name = 'Required'

  if (!isRequired(values.email))
    errors.email = 'Required'

  return errors
}
