//-----------  Imports  -----------//

import Record               from './styles'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

const RecordOption = ({ id, name }) => {

  return (
    <Record.Option>
      {id && <Record.Id>{id}</Record.Id>}
      {name}
    </Record.Option>
  )
}

//-----------  Prop Types  -----------//

RecordOption.propTypes = {
  id   : PropTypes.string,
  name : PropTypes.node.isRequired
}

//-----------  Export  -----------//

export default RecordOption
