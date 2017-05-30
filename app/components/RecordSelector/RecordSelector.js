//-----------  Imports  -----------//

import Record               from './styles'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

const RecordSelector = ({ children, ...props }) => {

  return (
    <Record.Selector size='large' { ...props } allowClear showSearch>
      {children}
    </Record.Selector>
  )
}

//-----------  Prop Types  -----------//

RecordSelector.propTypes = {
  value     : PropTypes.string,
  children  : PropTypes.array,
  onSelect  : PropTypes.func,
  isLoading : PropTypes.bool.isRequired,
}

//-----------  Export  -----------//

export default RecordSelector
