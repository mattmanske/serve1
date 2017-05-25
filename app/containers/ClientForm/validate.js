//-----------  Imports  -----------//

import { isRequired } from 'utils/forms'

//-----------  Validation  -----------//

export default function(values){
  const errors = {}

  if (!isRequired(values.id))
    errors.id = 'Required'

  if (!isRequired(values.name))
    errors.name = 'Required'

  if (!isRequired(values.email))
    errors.email = 'Required'

  return errors
}
