//-----------  Imports  -----------//

import { isRequired } from 'utils/forms'

//-----------  Validation  -----------//

export default function(values){
  const errors = {}

  console.log(values);

  if (!isRequired(values.client))
    errors.client = 'Required'

  if (!isRequired(values.first_name))
    errors.first_name = 'Required'

  if (!isRequired(values.last_name))
    errors.last_name = 'Required'

  if (!isRequired(values.email))
    errors.email = 'Required'

  return errors
}
