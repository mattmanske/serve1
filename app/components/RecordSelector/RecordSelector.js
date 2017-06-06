//-----------  Imports  -----------//

import Record               from './styles'

import isFunction           from 'lodash/isFunction'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

const RecordSelector = ({ children, onChange, afterSelect, ...props }) => {

  function onSelect(value = null, label){
    isFunction(onChange) && onChange(value, label)
  }

  return (
    <Record.Selector size='large' allowClear showSearch onChange={onSelect} { ...props }>
      {children}
    </Record.Selector>
  )
}

//-----------  Prop Types  -----------//

RecordSelector.propTypes = {
  value       : PropTypes.string,
  children    : PropTypes.array,
  onChange    : PropTypes.func,
  afterSelect : PropTypes.func,
  isLoading   : PropTypes.bool.isRequired,
}

//-----------  Export  -----------//

export default RecordSelector
