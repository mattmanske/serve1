//-----------  Imports  -----------//

import Member               from './styles'

import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input,
         Switch }           from 'antd'

import ReduxAntdSubmit      from 'components/ReduxAntdSubmit'
import ReduxAntdWrapper     from 'components/ReduxAntdWrapper'

import { isEmail,
         isRequired }       from 'utils/forms'

//-----------  Validation  -----------//

function validate(values){
  const errors = {}

  if (!isRequired(values.name))
    errors.name = 'Required'

  if (!isRequired(values.email))
    errors.email = 'Required'
  else if (!isEmail(values.email))
    errors.email = 'Invalid Email'

  return errors
}

//-----------  Component  -----------//

const MemberForm = (props) => {

  return (
    <Member.Wrapper noValidate onSubmit={props.handleSubmit}>
      <Field
        name='name'
        label='Name'
        required={true}
        layout='horizontal'
        component={ReduxAntdWrapper}
      >
        <Input />
      </Field>

      <Field
        name='email'
        label='Email'
        required={true}
        layout='horizontal'
        component={ReduxAntdWrapper}
      >
        <Input />
      </Field>

      <Field
        name='primary'
        label='Primary?'
        required={true}
        component={ReduxAntdWrapper}
      >
        <Switch size='small' />
      </Field>

      <ReduxAntdSubmit text='Submit' {...props} />
    </Member.Wrapper>
  )
}

//-----------  Prop Types  -----------//

MemberForm.propTypes = {
  onSubmit        : PropTypes.func.isRequired,
  onSubmitSuccess : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default reduxForm({ form: 'member', validate })(MemberForm)
