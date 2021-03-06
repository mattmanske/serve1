//-----------  Imports  -----------//

import Field                              from './styles'

import moment                             from 'moment'
import isEmpty                            from 'lodash/isEmpty'

import React, { PropTypes, cloneElement } from 'react'

//-----------  Component  -----------//

const ReduxAntdWrapper = (field) => {
  const { type, meta, label, layout, required, children, input: { value, checked, ...input }, ...props } = field

  const id       = (props.id || input.name)
  const invalid  = !!(meta.touched && meta.error)
  const disabled = (props.isLoading || props.disabled)

  const validateStatus = invalid ? 'error' : null
  const formLayout     = ('horizontal' == layout) ? { labelCol: { span: 6 }, wrapperCol: { span: 18 } } : {}

  let onBlur         = () => input.onBlur()
  let onChange       = input.onChange
  let defaultValue   = value
  let defaultChecked = !!value

  switch (type){
    case 'calendar':
      onChange     = (val) => input.onChange(val ? val.toISOString() : null)
      defaultValue = (value && moment(value).isValid()) ? moment(value) : undefined
      break
    case 'checkbox-group':
      defaultValue = value ? value : []
      break
    case 'input':
      input.value = value || null
      if (!!field.addonAfter) input.addonAfter = field.addonAfter
      if (!!field.addonBefore) input.addonBefore = field.addonBefore
      break
  }

  const size       = 'large'
  const elState    = { id, label, required, disabled, validateStatus, ...formLayout }
  const childProps = { ...input, id, size, disabled, onBlur, onChange, defaultValue, defaultChecked }

  if ('select' == type){
    delete childProps.defaultValue
    childProps.value = isEmpty(value) ? undefined : value
  }

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

  className    : PropTypes.string,
  disabled     : PropTypes.bool,
  icon         : PropTypes.string,
  id           : PropTypes.string,
  label        : PropTypes.string,
  loading      : PropTypes.bool,
  prependLabel : PropTypes.bool,
  required     : PropTypes.bool,
  style        : PropTypes.object,
  type         : PropTypes.string,

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
  type         : 'text',
}

//-----------  Export  -----------//

export default ReduxAntdWrapper
