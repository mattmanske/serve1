//-----------  Imports  -----------//

import { validatePerson }   from './validate'

import React, { PropTypes } from 'react'
import { reduxForm }        from 'redux-form'
import { Input }            from 'antd'

import FormWrapper          from 'components/FormWrapper'
import ReduxAntdWrapper     from 'components/ReduxAntdWrapper'

import { SERVICE_TYPES,
         constToSelect }    from 'utils/constants'

//-----------  Definitions  -----------//

const fieldAttrs = {
  type      : 'input',
  field     : <Input />,
  component : ReduxAntdWrapper
}

const fields = [{
  name      : 'person_name',
  label     : 'Full Name',
  required  : true,
},{
  name      : 'person_title',
  label     : 'Title',
  required  : true,
},{
  name      : 'person_capacity',
  label     : 'Capacity',
},{
  type      : 'textarea',
  name      : 'person_description',
  label     : 'Description',
  field     : <Input type='textarea' autosize={{ minRows: 3, maxRows: 3 }} />
}]

//-----------  Component  -----------//

const PersonForm = (props) => {

  const formProps = { ...props, fields, fieldAttrs }

  return (
    <FormWrapper type='attempt' { ...formProps } />
  )
}

//-----------  Prop Types  -----------//

PersonForm.propTypes = {
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

export default reduxForm({ form: 'attempt-person', validatePerson })(PersonForm)
