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
    title,
    filter,
    disabled,
    horizontal,
    isLoading,
    selector,
    canSelect,
    selectedID,
    fields,
    fieldAttrs,
    btnText,
    otherBtn,
    ...formProps,
  } = props

  const isDisabled = (!!selectedID && !!selector) || disabled

  return (
    <Form.Wrapper noValidate onSubmit={formProps.handleSubmit}>
      {title &&
        <FormTitle
          title={title}
          horizontal={horizontal}
        />
      }

      {canSelect &&
        <FormSelector
          value={selectedID}
          filter={filter}
          selector={selector}
          isLoading={isLoading}
          horizontal={horizontal}
          afterSelect={props.onSubmitSuccess}
        />
      }

      {fields.map(attrs => {
        const { field, ...fieldProps } = {
          key      : attrs.name,
          layout   : (horizontal ? 'horizontal' : null),
          disabled : isDisabled,
          ...fieldAttrs,
          ...attrs,
        }
        return (
          <Field { ...fieldProps }>{field}</Field>
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
  title           : PropTypes.node,
  filter          : PropTypes.string,
  disabled        : PropTypes.bool,
  horizontal      : PropTypes.bool,
  isLoading       : PropTypes.bool,
  selector        : PropTypes.func,
  canSelect       : PropTypes.bool,
  selectedID      : PropTypes.string,
  fields          : PropTypes.array.isRequired,
  fieldAttrs      : PropTypes.object,
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
