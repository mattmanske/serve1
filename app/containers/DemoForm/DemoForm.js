//-----------  Imports  -----------//

import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

import ReduxField           from 'components/ReduxField'
import ReduxSubmit          from 'components/ReduxSubmit'

import { isEmail,
         isRequired }       from 'utils/forms'

//-----------  Definitions  -----------//

const form = 'demo-form'

//-----------  Validation  -----------//

function validate(values){
  const errors = {}

  if (!isRequired(values.name))
    errors.name = 'Required'

  return errors
}

//-----------  Component  -----------//

const DemoForm = (props) => {

  return (
    <form noValidate onSubmit={props.handleSubmit}>
      <Field
        type='text'
        name='name'
        required={true}
        label='Full Name'
        component={ReduxField}
      />
      <Field
        type='email'
        name='email'
        required={true}
        label='Email'
        component={ReduxField}
      />
      <Field
        type='text'
        name='organization'
        required={true}
        label='Company'
        component={ReduxField}
      />
      <Field
        type='password'
        name='password'
        required={true}
        label='Pasword'
        component={ReduxField}
      />

      <ReduxSubmit text='Submit' canReset={true} {...props} />
    </form>
  )
}

//-----------  Prop Types  -----------//

DemoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

//-----------  Export  -----------//

export default reduxForm({ form: 'demo', validate })(DemoForm)
