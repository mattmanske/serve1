//-----------  Imports  -----------//

import Records              from './styles'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

const RecordsTable = (props) => {

  return (
    <Records.Table pagination={false} { ...props } />
  )
}

//-----------  Prop Types  -----------//

RecordsTable.propTypes = {}

//-----------  Export  -----------//

export default RecordsTable
