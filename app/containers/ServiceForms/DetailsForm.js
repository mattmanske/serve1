//-----------  Imports  -----------//

import { validateDetails }  from './validate'

import React, { PropTypes } from 'react'
import { reduxForm }        from 'redux-form'
import { Input,
         Select,
         DatePicker }       from 'antd'

import FormWrapper          from 'components/FormWrapper'
import ReduxAntdWrapper     from 'components/ReduxAntdWrapper'

import { SERVICE_TYPES,
         constToSelect }    from 'utils/constants'

//-----------  Definitions  -----------//

const Option = Select.Option

const fieldAttrs = {
  type      : 'input',
  field     : <Input />,
  component : ReduxAntdWrapper
}

const fields = [{
  type      : 'calendar',
  name      : 'serviced_at',
  label     : 'Date',
  required  : true,
  field     : <DatePicker format={'MMM Do, YYYY'} />,
},{
  type      : 'select',
  name      : 'type',
  label     : 'Type',
  required  : true,
  field     : (
    <Select placeholder='Select Type...'>
      {constToSelect(SERVICE_TYPES).map(({ value, label }) => (
        <Option key={value} value={value}>{label}</Option>
      ))}
    </Select>
  )
}]

//-----------  Component  -----------//

const DetailsForm = (props) => {

  const formProps = { ...props, fields, fieldAttrs }

  return (
    <FormWrapper type='service' { ...formProps } />
  )
}

//-----------  Prop Types  -----------//

DetailsForm.propTypes = {
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

export default reduxForm({ form: 'service-details', validateDetails })(DetailsForm)
