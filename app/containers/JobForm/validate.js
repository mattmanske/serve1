//-----------  Imports  -----------//

import { isRequired } from 'utils/forms'

//-----------  Validation  -----------//

export default function(values){
  const errors = {}

  if (!isRequired(values.id))
    errors.id = 'Required'

  if (!isRequired(values.date_received))
    errors.date_received = 'Required'

  return errors
}
