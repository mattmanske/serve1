//-----------  Imports  -----------//

import Form                 from './styles'

import React, { PropTypes } from 'react'
import { Field }            from 'redux-form'

import FormTitle            from './FormTitle'
import FormSelector         from './FormSelector'
import FormSubmit           from './FormSubmit'

//-----------  Component  -----------//

const FormWrapper = (props) => {

  const {
    type,
    title,
    filter,
    disabled,
    horizontal,
    isLoading,
    selector,
    onSelect,
    canSelect,
    selectedID,
    fields,
    fieldAttrs,
    parentField,
    btnText,
    otherBtn,
    ...formProps,
  } = props

  const isDisabled = (canSelect && !!selectedID && !!selector) || disabled

  return (
    <Form.Wrapper noValidate onSubmit={formProps.handleSubmit}>
      {title &&
        <FormTitle
          title={title}
          horizontal={horizontal}
        />
      }

      {parentField &&
          <Field { ...parentField }>{parentField.field}</Field>
      }

      {canSelect &&
        <FormSelector
          type={type}
          value={selectedID}
          filter={filter}
          onChange={onSelect}
          selector={selector}
          isLoading={isLoading}
          horizontal={horizontal}
          afterSelect={props.onSubmitSuccess}
        />
      }

      {fields.map(attrs => {
        const { field, ...fieldProps } = {
          layout   : (horizontal ? 'horizontal' : null),
          disabled : isDisabled,
          ...fieldAttrs,
          ...attrs,
        }
        return (
          <Form.Field key={fieldProps.name}>
            <Field { ...fieldProps }>{field}</Field>
          </Form.Field>
        )
      })}

      <FormSubmit
        btnText={btnText}
        otherBtn={otherBtn}
        horizontal={horizontal}
        { ...formProps }
      />
    </Form.Wrapper>
  )
}

//-----------  Prop Types  -----------//

FormWrapper.propTypes = {
  type            : PropTypes.string.isRequired,
  title           : PropTypes.node,
  filter          : PropTypes.string,
  disabled        : PropTypes.bool,
  horizontal      : PropTypes.bool,
  isLoading       : PropTypes.bool,
  selector        : PropTypes.func,
  onSelect        : PropTypes.func,
  canSelect       : PropTypes.bool,
  selectedID      : PropTypes.string,
  fields          : PropTypes.array.isRequired,
  fieldAttrs      : PropTypes.object,
  parentField     : PropTypes.object,
  btnText         : PropTypes.string,
  otherBtn        : PropTypes.node,
  onSubmitSuccess : PropTypes.func.isRequired,
}

FormWrapper.defaultProps = {
  btnText    : 'Save',
  disabled   : false,
  canSelect  : false,
  isLoading  : false,
  horizontal : true,
  fieldAttrs : {},
}

//-----------  Export  -----------//

export default FormWrapper
