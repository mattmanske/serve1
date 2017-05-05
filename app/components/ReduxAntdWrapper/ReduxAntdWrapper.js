//-----------  Imports  -----------//

import Field                              from './styles'

import moment                             from 'moment'

import React, { PropTypes, cloneElement } from 'react'

//-----------  Component  -----------//

const ReduxAntdWrapper = (field) => {
  const { label, meta, layout, children, input: { value, onBlur, ...input }, ...props } = field

  const id       = (props.id || input.name)
  const invalid  = !!(meta.touched && meta.error)
  const disabled = (props.isLoading || props.disabled)

  const validateStatus = invalid ? 'error' : null
  const formLayout     = ('horizontal' == layout) ? { labelCol: { span: 6 }, wrapperCol: { span: 18 } } : {}

  const onChange = ('PickerWrapper' == children.type.name)
    ? (val) => input.onChange(val.toString())
    : input.onChange

  const elState    = { id, label, disabled, validateStatus, ...formLayout }
  const childProps = { id, disabled, ...input, onChange, onBlur: () => onBlur() }

  return (
    <Field.Wrapper { ...elState }>
      <Field.Errors title={meta.error || ''} placement='right' visible={invalid && meta.active}>
        {cloneElement(children, childProps)}
      </Field.Errors>
    </Field.Wrapper>
  )
}

//-----------  Prop Types  -----------//

ReduxAntdWrapper.propTypes = {
  // ReduxFormWrapper Props

  disabled     : PropTypes.bool,
  id           : PropTypes.string,
  icon         : PropTypes.string,
  label        : PropTypes.string,
  loading      : PropTypes.bool,
  prependLabel : PropTypes.bool,
  required     : PropTypes.bool,
  style        : PropTypes.object,
  className    : PropTypes.string,

  // Ant Design Props

  layout: PropTypes.oneOf(['horizontal', 'vertical', 'inline']),

  // ReduxForm Field Props

  dirty    : PropTypes.bool,
  input    : PropTypes.shape({
    checked     : PropTypes.bool,
    name        : PropTypes.string.isRequired,
    onBlur      : PropTypes.func.isRequired,
    onChange    : PropTypes.func.isRequired,
    onDragStart : PropTypes.func.isRequired,
    onDrop      : PropTypes.func.isRequired,
    onFocus     : PropTypes.func.isRequired,
    value       : PropTypes.any,
  }).isRequired,
  meta     : PropTypes.shape({
    active          : PropTypes.bool.isRequired,
    asyncValidating : PropTypes.bool.isRequired,
    autofilled      : PropTypes.bool.isRequired,
    dirty           : PropTypes.bool.isRequired,
    dispatch        : PropTypes.func.isRequired,
    error           : PropTypes.string,
    form            : PropTypes.string.isRequired,
    invalid         : PropTypes.bool.isRequired,
    pristine        : PropTypes.bool.isRequired,
    submitFailed    : PropTypes.bool.isRequired,
    submitting      : PropTypes.bool.isRequired,
    touched         : PropTypes.bool.isRequired,
    valid           : PropTypes.bool.isRequired,
    visited         : PropTypes.bool.isRequired,
    warning         : PropTypes.string,
  }).isRequired,
  name     : PropTypes.string,
  pristine : PropTypes.bool,
  value    : PropTypes.any,
}


ReduxAntdWrapper.defaultProps = {
  disabled     : false,
  layout       : 'horizontal',
  loading      : false,
  prependLabel : true,
  required     : false,
}

//-----------  Export  -----------//

export default ReduxAntdWrapper
