//-----------  Imports  -----------//

import { isRequired } from 'utils/forms'

//-----------  Validation  -----------//

export default function(values){
  const errors = {}

  if (!isRequired(values.name))
    errors.name = 'Required'

  if (!isRequired(values.state))
    errors.state = 'Required'

  if (!isRequired(values.county))
    errors.county = 'Required'

  if (!isRequired(values.address))
    errors.address = 'Required'

  return errors
}
