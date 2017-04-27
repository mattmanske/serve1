//-----------  Imports  -----------//

import Block                              from './styles'

import React, { PropTypes, cloneElement } from 'react'

import MaterialIcon                       from 'components/MaterialIcon'
import LoadingSpinner                     from 'components/LoadingSpinner'

//-----------  Component  -----------//

const ReduxFieldWrapper = (field) => {
  const { input, meta, value, children, elements: El, ...props } = field

  const id         = (props.id || props.name)
  const invalid    = !!(meta.touched && meta.error)
  const disabled   = (props.isLoading || props.disabled)

  const elState    = { invalid, disabled }
  const childProps = { input, meta, value, field: { ...props, id, ...elState }}

  const className  = [props.className, (invalid ? 'redux-field is-invalid' : 'redux-field')]

  return (
    <El.wrapper style={props.style} className={className.join(' ')} { ...elState }>
      {props.label && props.prependLabel &&
        <El.label htmlFor={id} { ...elState }>
          {props.label}{props.required && <sup>*</sup>}
          {props.notes && <El.notes { ...elState }>{props.notes}</El.notes>}
        </El.label>
      }

      <El.interior { ...elState }>
        {props.icon &&
          <El.icon icon={props.icon} { ...elState } />
        }

        {props.loading &&
          <El.loading { ...elState }  />
        }

        {props.prefix &&
          <El.prefix { ...elState }>{props.prefix}</El.prefix>
        }

        {cloneElement(children, childProps)}

        {props.suffix &&
          <El.suffix { ...elState }>{props.suffix}</El.suffix>
        }

        <El.error { ...elState }>{meta.error || ' '}</El.error>
      </El.interior>

      {props.label && !props.prependLabel &&
        <El.label htmlFor={id} { ...elState }>
          {props.label}{props.required && <sup>*</sup>}
        </El.label>
      }
    </El.wrapper>
  )
}

//-----------  Prop Types  -----------//

ReduxFieldWrapper.propTypes = {
  // ReduxFormWrapper Props

  disabled      : PropTypes.bool,
  elements      : PropTypes.shape({
    error    : PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    icon     : PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    interior : PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    label    : PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    loading  : PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    notes    : PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    prefix   : PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    suffix   : PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    wrapper  : PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  }),
  id            : PropTypes.string,
  icon          : PropTypes.string,
  label         : PropTypes.string,
  loading       : PropTypes.bool,
  prependLabel  : PropTypes.bool,
  required      : PropTypes.bool,
  style         : PropTypes.object,
  className     : PropTypes.string,

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


ReduxFieldWrapper.defaultProps = {
  disabled      : false,
  elements      : {
    error    : Block.Errors,
    icon     : MaterialIcon,
    interior : Block.Interior,
    label    : Block.Label,
    loading  : LoadingSpinner,
    notes    : Block.Notes,
    prefix   : Block.Prefix,
    suffix   : Block.Suffix,
    wrapper  : Block.Wrapper,
  },
  loading       : false,
  prependLabel  : true,
  required      : false,
}

//-----------  Export  -----------//

export default ReduxFieldWrapper
