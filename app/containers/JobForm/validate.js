//-----------  Imports  -----------//

import { isRequired } from 'utils/forms'

//-----------  Validation  -----------//

export default function(values){
  const errors = {}

  if (!isRequired(values.id))
    errors.id = 'Required'

  if (!isRequired(values.state))
    errors.state = 'Required'

  if (!isRequired(values.county))
    errors.county = 'Required'

  if (!isRequired(values.court_type))
    errors.court_type = 'Required'

  if (!isRequired(values.plantiff))
    errors.plantiff = 'Required'

  if (!isRequired(values.defendant))
    errors.defendant = 'Required'

  return errors
}
