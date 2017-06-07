//-----------  Imports  -----------//

import validate             from './validate'

import React, { PropTypes } from 'react'
import { reduxForm }        from 'redux-form'
import { Input,
         Select }           from 'antd'

import FormWrapper          from 'components/FormWrapper'
import ReduxAntdWrapper     from 'components/ReduxAntdWrapper'

import PartySelect          from 'containers/PartySelect'

//-----------  Definitions  -----------//

const selector = PartySelect
const Option   = Select.Option

const fieldAttrs = {
  type      : 'input',
  field     : <Input />,
  component : ReduxAntdWrapper
}

const fields = [{
  name      : 'name',
  label     : 'Full Name',
  required  : true,
},{
  type      : 'select',
  name      : 'state',
  label     : 'State',
  required  : true,
  field     : (
    <Select placeholder='Select State...'>
      <Option value='WI'>Wisconsin</Option>
    </Select>
  )
},{
  type      : 'select',
  name      : 'county',
  label     : 'County',
  required  : true,
  field     : (
    <Select placeholder='Select County...'>
      <Option value='Dane'>Dane</Option>
    </Select>
  )
},{
  type      : 'textarea',
  name      : 'address',
  label     : 'Address',
  required  : true,
  field     : <Input type='textarea' autosize={{ minRows: 3, maxRows: 3 }} />
}]

//-----------  Component  -----------//

const PartyForm = (props) => {

  const formProps = { ...props, fields, fieldAttrs, selector }

  return (
    <FormWrapper type='party' { ...formProps } />
  )
}

//-----------  Prop Types  -----------//

PartyForm.propTypes = {
  title           : PropTypes.string,
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

export default reduxForm({ form: 'party', validate })(PartyForm)
