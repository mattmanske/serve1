//-----------  Imports  -----------//

import Block                from './styles'

import has                  from 'lodash/has'
import pull                 from 'lodash/pull'
import includes             from 'lodash/includes'
import moment               from 'moment'

import React, { PropTypes } from 'react'
import MaskedInput          from 'react-text-mask'
import DatePicker           from 'react-datepicker'

import MaterialIcon         from 'components/MaterialIcon'
import LoadingSpinner       from 'components/LoadingSpinner'

//-----------  Component  -----------//

const ReduxField = (field) => {
  const { input, meta, inputOpts, ...props } = field
  let inputBlock = ''

  const id        = props.id || input.name
  const isInvalid = !!(meta.touched && meta.error)

  if ('textarea' == props.type){
    inputBlock = (
      <textarea
        {...input}
        {...inputOpts}
        id={id}
        disabled={props.isLoading || props.disabled}
        required={props.required}
        placeholder={props.placeholder}
      />
    )
  } else if ('date' == props.type){
    inputBlock = (
      <DatePicker
        autoComplete='off'
        minDate={inputOpts.min}
        maxDate={inputOpts.max}
        disabled={props.isLoading || props.disabled}
        selected={input.value ? moment.utc(input.value) : null}
        onChange={(val) => input.onChange(val && moment.utc(val).toString())}
        onFocus={(evt) => input.onFocus(evt)}
      />
    )
  } else if ('select' == props.type){
    inputBlock = (
      <select
        {...input}
        {...inputOpts}
        id={id}
        type={props.type}
        disabled={props.isLoading || props.disabled}
        required={props.required}
        placeholder={props.placeholder}
      >
        {props.children}
      </select>
    )
  } else if (has(inputOpts, 'mask') || has(inputOpts, 'pipe')){
    inputBlock = (
      <MaskedInput
        mask={false}
        {...input}
        {...inputOpts}
        id={id}
        guide={true}
        type={props.type}
        placeholderChar={'\u2000'}
        disabled={props.isLoading || props.disabled}
        required={props.required}
        placeholder={props.placeholder}
      />
    )
  } else {
    inputBlock = (
      <input
        {...input}
        {...inputOpts}
        id={id}
        type={props.type}
        disabled={props.isLoading || props.disabled}
        required={props.required}
        placeholder={props.placeholder}
      />
    )
  }

  const className = isInvalid ? 'redux-field is-invalid' : 'redux-field'

  return (
    <Block.Elem isInvalid={isInvalid} className={className}>
      {props.prependLabel && props.label &&
        <Block.Label htmlFor={id} isInvalid={isInvalid}>
          {props.label}{props.required && <sup>*</sup>}
          {props.notes && <Block.Notes>{props.notes}</Block.Notes>}
        </Block.Label>
      }

      <Block.Interior disabled={props.isLoading || props.disabled}>
        {props.inputIcon &&
          <MaterialIcon icon={props.inputIcon} />
        }

        {props.isLoading &&
          <LoadingSpinner />
        }

        {props.prefix &&
          <Block.Prefix>{props.prefix}</Block.Prefix>
        }

        {inputBlock}

        {props.suffix && input.value &&
          <Block.Suffix>{props.suffix}</Block.Suffix>
        }

        {('select' == props.type) &&
          <MaterialIcon className='select-icon' icon='arrow_drop_down' />
        }

        <Block.Errors isInvalid={isInvalid} isFocused={meta.active}>{meta.error || ' '}</Block.Errors>
      </Block.Interior>

      {!props.prependLabel && props.label &&
        <Block.Label htmlFor={id} isInvalid={isInvalid}>
          {props.label}{props.required && <sup>*</sup>}
        </Block.Label>
      }
    </Block.Elem>
  )
}

//-----------  Prop Types  -----------//

ReduxField.propTypes = {
  type         : PropTypes.oneOf(['checkbox', 'select', 'color', 'date', 'datetime', 'datetime-local', 'email', 'hidden', 'month', 'number', 'password', 'radio', 'range', 'search', 'tel', 'text', 'textarea', 'time', 'url', 'week']),
  input        : PropTypes.object,
  options      : PropTypes.array,
  disabled     : PropTypes.bool,
  required     : PropTypes.bool,
  placeholder  : PropTypes.string,
  notes        : PropTypes.node,
  label        : PropTypes.node,
  isLoading    : PropTypes.bool,
  inputIcon    : PropTypes.string,
  prependLabel : PropTypes.bool
}

ReduxField.defaultProps = {
  type         : 'text',
  input        : {},
  disabled     : false,
  required     : false,
  placeholder  : '',
  prependLabel : true,
}

//-----------  Export  -----------//

export default ReduxField
