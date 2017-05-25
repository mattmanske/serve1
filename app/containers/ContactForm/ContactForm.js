//-----------  Imports  -----------//

import validate             from './validate'

import React, { PropTypes } from 'react'
import { reduxForm }        from 'redux-form'
import { Input }            from 'antd'

import FormWrapper          from 'components/FormWrapper'
import ReduxAntdWrapper     from 'components/ReduxAntdWrapper'

import ContactSelect        from 'containers/ContactSelect'

//-----------  Definitions  -----------//

const selector = ContactSelect

const fieldAttrs = {
  field     : <Input />,
  component : ReduxAntdWrapper
}

const fields = [{
  name      : 'client',
  label     : 'Client',
  required  : true,
},{
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
  name      : 'phone',
  label     : 'Phone',
},{
  name      : 'address',
  label     : 'Address',
}]

//-----------  Component  -----------//

const ContactForm = (props) => {

  const formProps = { ...props, fields, fieldAttrs, selector }

  return (
    <FormWrapper { ...formProps } />
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
  onSubmit        : PropTypes.func.isRequired,
  onSubmitFail    : PropTypes.func,
  onSubmitSuccess : PropTypes.func.isRequired,
}

ContactForm.defaultProps = {
  title: 'Client Contact',
}

//-----------  Exports  -----------//

export default reduxForm({ form: 'contact', validate })(ContactForm)
