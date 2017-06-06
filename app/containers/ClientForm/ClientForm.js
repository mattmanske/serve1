//-----------  Imports  -----------//

import validate             from './validate'

import React, { PropTypes } from 'react'
import { reduxForm }        from 'redux-form'
import { Input }            from 'antd'

import FormWrapper          from 'components/FormWrapper'
import ReduxAntdWrapper     from 'components/ReduxAntdWrapper'

import ClientSelect         from 'containers/ClientSelect'

//-----------  Definitions  -----------//

const selector = ClientSelect

const fieldAttrs = {
  type      : 'input',
  field     : <Input />,
  component : ReduxAntdWrapper
}

const fields = [{
  name      : 'id',
  label     : 'Internal ID',
},{
  name      : 'name',
  label     : 'Company',
  required  : true,
},{
  name      : 'email',
  label     : 'Email',
  required  : true,
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

const ClientForm = (props) => {

  const formProps = { ...props, fields, fieldAttrs, selector }

  return (
    <FormWrapper type='client' { ...formProps } />
  )
}

//-----------  Prop Types  -----------//

ClientForm.propTypes = {
  title           : PropTypes.string,
  canSelect       : PropTypes.bool,
  selectedID      : PropTypes.string,
  btnText         : PropTypes.string,
  otherBtn        : PropTypes.node,
  isLoading       : PropTypes.bool,
  onSubmit        : PropTypes.func.isRequired,
  onSubmitFail    : PropTypes.func,
  onSubmitSuccess : PropTypes.func.isRequired,
}

//-----------  Exports  -----------//

export default reduxForm({ form: 'client', validate })(ClientForm)
