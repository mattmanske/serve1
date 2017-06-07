//-----------  Imports  -----------//

import { validateNotes }    from './validate'

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

const fieldAttrs = {
  type      : 'input',
  field     : <Input />,
  component : ReduxAntdWrapper
}

const fields = [{
  name      : 'milage',
  label     : 'Milage',
},{
  name      : 'Payment',
  label     : 'Payment',
},{
  type      : 'textarea',
  name      : 'notes',
  label     : 'Notes',
  field     : <Input type='textarea' autosize={{ minRows: 3, maxRows: 3 }} />
}]


//-----------  Component  -----------//

const NotesForm = (props) => {

  const formProps = { ...props, fields, fieldAttrs }

  return (
    <FormWrapper type='attempt' { ...formProps } />
  )
}

//-----------  Prop Types  -----------//

NotesForm.propTypes = {
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

export default reduxForm({ form: 'attempt-notes', validateNotes })(NotesForm)
