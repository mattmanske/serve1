//-----------  Imports  -----------//

import Records              from './styles'

import compact              from 'lodash/compact'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

const RecordsTable = ({ columns, ...props }) => {

  return (
    <Records.Table pagination={false} columns={compact(columns)} { ...props } />
  )
}

//-----------  Prop Types  -----------//

RecordsTable.propTypes = {
  columns    : PropTypes.array.isRequired,
  dataSource : PropTypes.array.isRequired
}

//-----------  Export  -----------//

export default RecordsTable
