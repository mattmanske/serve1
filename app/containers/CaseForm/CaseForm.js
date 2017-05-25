//-----------  Imports  -----------//

import validate             from './validate'

import React, { PropTypes } from 'react'
import { reduxForm }        from 'redux-form'
import { Input }            from 'antd'

import FormWrapper          from 'components/FormWrapper'
import ReduxAntdWrapper     from 'components/ReduxAntdWrapper'

import CaseSelect           from 'containers/CaseSelect'

//-----------  Definitions  -----------//

const selector = CaseSelect

const fieldAttrs = {
  field     : <Input />,
  component : ReduxAntdWrapper
}

const fields = [{
  name      : 'id',
  label     : 'Case Number',
  required  : true,
},{
  name      : 'state',
  label     : 'State',
  required  : true,
},{
  name      : 'county',
  label     : 'County',
  required  : true,
},{
  name      : 'court_type',
  label     : 'Court Type',
  required  : true,
},{
  name      : 'plantiff',
  label     : 'Plantiff',
  required  : true,
},{
  name      : 'defendant',
  label     : 'Defendant',
  required  : true,
}]

//-----------  Component  -----------//

const CaseForm = (props) => {

  const formProps = { ...props, fields, fieldAttrs, selector }

  return (
    <FormWrapper { ...formProps } />
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

CaseForm.defaultProps = {
  title: 'Case',
}

//-----------  Exports  -----------//

export default reduxForm({ form: 'case', validate })(CaseForm)
