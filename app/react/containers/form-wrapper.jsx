//-----------  Imports  -----------//

import React            from 'react'
import { reduxForm }    from 'redux-form'

import RegistrationFrom from '../components/forms/registration-form'

//-----------  Class Setup  -----------//

class FormWrapper extends React.Component {
  render(){
    const { handleSubmit, ...props } = this.props
    console.log(this.props)

    return (
      <form onSubmit={handleSubmit}>
        <RegistrationFrom {...props} />
      </form>
    )
  }
}

//-----------  Export  -----------//

FormWrapper = reduxForm({ form: 'registration' })(FormWrapper)

export default FormWrapper
