//-----------  Imports  -----------//

import Route                from './styles'

import React, { PropTypes } from 'react'
import { Field }            from 'redux-form'
import { Input }            from 'antd'

import ReduxAntdSubmit      from 'components/ReduxAntdSubmit'
import ReduxAntdWrapper     from 'components/ReduxAntdWrapper'

//-----------  Component  -----------//

const ContactStep = ({ title, backButton, ...props }) => {

  return (
    <Route.Form noValidate onSubmit={props.handleSubmit}>
      <Route.Title>{title}</Route.Title>

      <Field
        name='contact.client'
        label='Client'
        required={true}
        layout='horizontal'
        component={ReduxAntdWrapper}
      >
        <Input />
      </Field>

      <Field
        name='contact.first_name'
        label='First Name'
        required={true}
        layout='horizontal'
        component={ReduxAntdWrapper}
      >
        <Input />
      </Field>

      <Field
        name='contact.last_name'
        label='Last Name'
        required={true}
        layout='horizontal'
        component={ReduxAntdWrapper}
      >
        <Input />
      </Field>

      <Field
        name='contact.email'
        label='Email'
        required={true}
        layout='horizontal'
        component={ReduxAntdWrapper}
      >
        <Input />
      </Field>

      <Field
        name='contact.phone'
        label='Phone'
        layout='horizontal'
        component={ReduxAntdWrapper}
      >
        <Input />
      </Field>

      <Field
        name='contact.address'
        label='Address'
        layout='horizontal'
        component={ReduxAntdWrapper}
      >
        <Input />
      </Field>

      <ReduxAntdSubmit text='Next' other={backButton} { ...props } />
    </Route.Form>
  )
}

//-----------  Prop Types  -----------//

ContactStep.propTypes = {
  title           : PropTypes.string.isRequired,
  backButton      : PropTypes.node,
  onSubmit        : PropTypes.func.isRequired,
  onSubmitFail    : PropTypes.func.isRequired,
  onSubmitSuccess : PropTypes.func.isRequired,
}

//-----------  Exports  -----------//

export default ContactStep
