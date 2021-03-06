//-----------  Imports  -----------//

import validate             from './validate'

import React, { PropTypes } from 'react'
import { reduxForm }        from 'redux-form'
import { Input }            from 'antd'

import FormWrapper          from 'components/FormWrapper'
import ReduxAntdWrapper     from 'components/ReduxAntdWrapper'

import ClientSelect         from 'containers/ClientSelect'
import ContactSelect        from 'containers/ContactSelect'

//-----------  Definitions  -----------//

const selector = ContactSelect

const fieldAttrs = {
  type      : 'input',
  field     : <Input />,
  component : ReduxAntdWrapper
}

const fields = [{
  name      : 'first_name',
  label     : 'First Name',
  required  : true,
},{
  name      : 'last_name',
  label     : 'Last Name',
  required  : true,
},{
  name      : 'email',
  label     : 'Email',
  required  : true,
},{
  name      : 'role',
  label     : 'Role / Title',
},{
  name      : 'phone',
  label     : 'Phone',
},{
  type      : 'textarea',
  name      : 'address',
  label     : 'Address',
  field     : <Input type='textarea' autosize={{ minRows: 3, maxRows: 3 }} />
}]

//-----------  Component  -----------//

const ContactForm = (props) => {

  const parentField = {
    type      : 'select',
    name      : 'client',
    label     : 'Client',
    required  : true,
    field     : <ClientSelect />,
    component : ReduxAntdWrapper
  }

  const formProps = { ...props, fields, fieldAttrs, selector, parentField }

  return (
    <FormWrapper type='contact' { ...formProps } />
  )
}

//-----------  Prop Types  -----------//

ContactForm.propTypes = {
  title           : PropTypes.string,
  filter          : PropTypes.string,
  canSelect       : PropTypes.bool,
  selectedID      : PropTypes.string,
  btnText         : PropTypes.string,
  otherBtn        : PropTypes.node,
  isLoading       : PropTypes.bool,
  onSelect        : PropTypes.func.isRequired,
  onSubmit        : PropTypes.func.isRequired,
  onSubmitFail    : PropTypes.func,
  onSubmitSuccess : PropTypes.func.isRequired,
}

//-----------  Exports  -----------//

export default reduxForm({ form: 'contact', validate })(ContactForm)
