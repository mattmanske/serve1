//-----------  Imports  -----------//

import validate             from './validate'

import React, { PropTypes } from 'react'
import { reduxForm }        from 'redux-form'
import { Input,
         DatePicker }       from 'antd'

import FormWrapper          from 'components/FormWrapper'
import ReduxAntdWrapper     from 'components/ReduxAntdWrapper'

import JobSelect            from 'containers/JobSelect'
import ContactSelect        from 'containers/ContactSelect'

//-----------  Definitions  -----------//

const selector = JobSelect

const fieldAttrs = {
  field     : <Input />,
  component : ReduxAntdWrapper
}

const fields = [{
  name      : 'id',
  label     : 'Internal ID',
  required  : true,
},{
  name      : 'date_received',
  label     : 'Received',
  required  : true,
  field     : <DatePicker format={'MMM Do, YYYY'} />,
},{
  name      : 'assigned_to',
  label     : 'Assign To',
  field     : <ContactSelect />
}]

//-----------  Component  -----------//

const JobForm = (props) => {

  const formProps = { ...props, fields, fieldAttrs, selector }

  return (
    <FormWrapper type='job' { ...formProps } />
  )
}

//-----------  Prop Types  -----------//

JobForm.propTypes = {
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

export default reduxForm({ form: 'job', validate })(JobForm)
