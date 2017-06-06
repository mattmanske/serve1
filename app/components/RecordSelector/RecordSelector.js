//-----------  Imports  -----------//

import Record               from './styles'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

const RecordSelector = ({ children, onChange, ...props }) => {

  return (
    <Record.Selector size='large' allowClear showSearch onChange={(v = null, l) => onChange(v, l)} { ...props }>
      {children}
    </Record.Selector>
  )
}

//-----------  Prop Types  -----------//

RecordSelector.propTypes = {
  value     : PropTypes.string,
  children  : PropTypes.array,
  onChange  : PropTypes.func,
  isLoading : PropTypes.bool.isRequired,
}

//-----------  Export  -----------//

export default RecordSelector
