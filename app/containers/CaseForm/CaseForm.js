//-----------  Imports  -----------//

import validate             from './validate'

import React, { PropTypes } from 'react'
import { reduxForm }        from 'redux-form'
import { Input,
         Select,
         Checkbox }         from 'antd'

import FormWrapper          from 'components/FormWrapper'
import ReduxAntdWrapper     from 'components/ReduxAntdWrapper'

import CaseSelect           from 'containers/CaseSelect'

//-----------  Definitions  -----------//

const selector = CaseSelect
const Option   = Select.Option

const courtTypes = [{
  value : 'municipal_court',
  label : 'Municipal Court'
}, {
  value : 'circuit_court',
  label : 'Circuit Court'
}, {
  value : 'district_court',
  label : 'District Court'
}, {
  value : 'court_of_appeals',
  label : 'Court of Appeals'
}, {
  value : 'supreme_court',
  label : 'Supreme Court'
}, {
  value : 'department_of_workforce_development',
  label : 'Dept. of Workforce Development'
}, {
  value : 'other',
  label : 'Other'
}]

const fieldAttrs = {
  field     : <Input />,
  component : ReduxAntdWrapper
}

const fields = [{
  name      : 'id',
  label     : 'Case #',
  required  : true,
},{
  name      : 'state',
  label     : 'State',
  required  : true,
  field     : (
    <Select placeholder='Select State...'>
      <Option value='WI'>Wisconsin</Option>
    </Select>
  )
},{
  name      : 'county',
  label     : 'County',
  required  : true,
  field     : (
    <Select placeholder='Select County...'>
      <Option value='Dane'>Dane</Option>
    </Select>
  )
},{
  name      : 'court_type',
  label     : 'Court Type',
  required  : true,
  field     : (
    <Select placeholder='Select Court...'>
      {courtTypes.map(({ value, label }) => (
        <Option key={value} value={value}>{label}</Option>
      ))}
    </Select>
  )
},{
  name      : 'plantiff',
  label     : 'Plantiff',
  required  : true,
  // checkbox  : {
  //   name  : 'plantiff_et_al',
  //   field : <Checkbox>et al?</Checkbox>,
  // }
},{
  name      : 'defendant',
  label     : 'Defendant',
  required  : true,
  // checkbox  : {
  //   name  : 'defendant_et_al',
  //   field : <Checkbox>et al?</Checkbox>,
  // }
}]

//-----------  Component  -----------//

const CaseForm = (props) => {

  const formProps = { ...props, fields, fieldAttrs, selector }

  return (
    <FormWrapper type='case' { ...formProps } />
  )
}

//-----------  Prop Types  -----------//

CaseForm.propTypes = {
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

export default reduxForm({ form: 'case', validate })(CaseForm)
