//-----------  Imports  -----------//

import Table                from './styles'

import React, { PropTypes } from 'react'

import Money                from 'components/Money'

//-----------  Component  -----------//

const TotalsColumn = ({ title, count, total, ...props }) => {

  return (
    <Table.Totals>
      <small>
        <strong>{title}: </strong>
        {!!count && <em>{count}</em>}
      </small>
      {!!total ? <Money value={total} /> : <small>–</small>}
    </Table.Totals>
  )
}

//-----------  Prop Types  -----------//

TotalsColumn.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number,
  total: PropTypes.number.isRequired,
}

//-----------  Export  -----------//

export default TotalsColumn
