//-----------  Imports  -----------//

import validate             from './validate'

import React, { PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input }            from 'antd'

import ReduxAntdSubmit      from 'components/ReduxAntdSubmit'
import ReduxAntdWrapper     from 'components/ReduxAntdWrapper'
import { Form,
         Title,
         Selector }         from 'components/FormHelpers'

import ClientSelect         from 'containers/ClientSelect'

//-----------  Definitions  -----------//

const Fields = [{
  name     : 'id',
  label    : 'Internal ID',
  required : true,
  input    : <Input />
},{
  name     : 'name',
  label    : 'Name',
  required : true,
  input    : <Input />
},{
  name     : 'email',
  label    : 'Email',
  required : true,
  input    : <Input />
},{
  name     : 'address',
  label    : 'Address',
  input    : <Input />
},{
  name     : 'phone',
  label    : 'Phone',
  input    : <Input />
}]

//-----------  Component  -----------//

const ClientForm = ({ id, title, select, otherBtn, onSelect, ...props }) => {

  const field = {
    layout    : 'horizontal',
    disabled  : !!id && select,
    component : ReduxAntdWrapper,
  }

  return (
    <Form noValidate onSubmit={props.handleSubmit}>
      {title && <Title>{title}</Title>}

      {select &&
        <Selector>
          <ClientSelect autofocus value={id} onChange={onSelect} />
        </Selector>
      }

      {Fields.map(({ input, ...attrs }) => (
        <Field key={attrs.name} { ...attrs }{ ...field }>
          {input}
        </Field>
      ))}

      <ReduxAntdSubmit text='Next' other={otherBtn} { ...props } />
    </Form>
  )
}


//-----------  Prop Types  -----------//

ClientForm.propTypes = {
  id              : PropTypes.string,
  text            : PropTypes.string,
  title           : PropTypes.string.isRequired,
  select          : PropTypes.bool,
  otherBtn        : PropTypes.node,
  onSelect        : PropTypes.func.isRequired,
  onSubmit        : PropTypes.func.isRequired,
  onSubmitFail    : PropTypes.func.isRequired,
  onSubmitSuccess : PropTypes.func.isRequired,
}

ClientForm.defaultProps = {
  text   : 'Save',
  select : false
}

//-----------  Exports  -----------//

export default reduxForm({ form: 'client', validate })(ClientForm)
