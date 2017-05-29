//-----------  Imports  -----------//

import Record               from './styles'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

const RecordOption = ({ id, name }) => {

  return (
    <Record.Option>
      {!!id && <Record.Id>{id}</Record.Id>}
      {!!name && name}
    </Record.Option>
  )
}

//-----------  Prop Types  -----------//

RecordOption.propTypes = {
  id   : PropTypes.string,
  name : PropTypes.node
}

//-----------  Export  -----------//

export default RecordOption
