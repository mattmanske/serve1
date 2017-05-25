//-----------  Imports  -----------//

import Form                 from './styles'

import React, { PropTypes } from 'react'
import { Field }            from 'redux-form'

import FormTitle            from './FormTitle'
import FormSelector         from './FormSelector'
import FormSubmit           from './FormSubmit'

//-----------  Component  -----------//

const FormWrapper = (props) => {

  const disabled = (!!props.selectedID && !!props.selector) || props.disabled

  return (
    <Form.Wrapper>
      {props.title &&
        <FormTitle
          title={props.title}
          horizontal={props.horizontal}
        />
      }

      {props.canSelect &&
        <FormSelector
          value={props.selectedID}
          selector={props.selector}
          isLoading={props.isLoading}
          horizontal={props.horizontal}
          afterSelect={props.onSubmitSuccess}
        />
      }

      {props.fields.map(attrs => {
        const { field, ...fieldProps } = {
          key      : attrs.name,
          layout   : (props.horizontal ? 'horizontal' : null),
          disabled : disabled,
          ...props.fieldAttrs,
          ...attrs,
        }
        return (
          <Field { ...fieldProps }>{field}</Field>
        )
      })}

      <FormSubmit
        btnText={props.btnText}
        otherBtn={props.otherBtn}
        horizontal={props.horizontal}
        { ...props }
      />
    </Form.Wrapper>
  )
}

//-----------  Prop Types  -----------//

FormWrapper.propTypes = {
  title           : PropTypes.node,
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
