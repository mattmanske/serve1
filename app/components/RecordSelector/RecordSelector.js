//-----------  Imports  -----------//

import Record               from './styles'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

const RecordSelector = (props) => {

  return (
    <Record.Selector { ...props } clearable />
  )
}

//-----------  Prop Types  -----------//

RecordSelector.propTypes = {
  value     : PropTypes.string,
  options   : PropTypes.array.isRequired,
  onChange  : PropTypes.func,
  isLoading : PropTypes.bool.isRequired,
}

//-----------  Export  -----------//

export default RecordSelector
