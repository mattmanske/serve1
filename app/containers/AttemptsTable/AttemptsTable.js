//-----------  Imports  -----------//

import moment               from 'moment'

import React, { PropTypes } from 'react'
import { Button }           from 'antd'

import RecordsTable,
       { Cell, Columns }    from 'components/RecordsTable'

import { SERVICE_TYPES }    from 'utils/constants'

//-----------  Static Columns  -----------//

const attemptCol = {
  key       : 'attempt',
  title     : 'Attempt',
  render    : attempt => (
    <Cell.Link to={`/jobs/${attempt.job}/attempts/${attempt.key}`}>
      <h5>{SERVICE_TYPES[attempt.type]}</h5>
      <h6>{moment.utc(attempt.attemptd_at).format('MMM Do, YYYY')}</h6>
    </Cell.Link>
  )
}

const personCol = {
  key       : 'person',
  title     : 'Person Served',
  render    : attempt => attempt.person_name ? (
    <Cell.Stacked>
      <h5>{attempt.person_name}</h5>
      <h6>{attempt.person_title}</h6>
    </Cell.Stacked>
  ) : (<Cell.Small>n/a</Cell.Small>)
}

//-----------  Dynamic Columns  -----------//

const partyCol = ({ parties }) => ({
  key       : 'party',
  title     : 'Attempt Party',
  dataIndex : 'party',
  render    : party => (
    <Cell.Stacked>
      <h5>{parties[party].name}</h5>
      <h6>{parties[party].county} County, {parties[party].state}</h6>
    </Cell.Stacked>
  )
})

const actionsCol = ({ modalActions }) => Columns.Actions([{
  icon    : 'edit',
  title   : 'Edit Attempt Party',
  onClick : attempt => console.log('delete :', { attempt })
},{
  icon    : 'edit',
  title   : 'Edit Attempt Details',
  onClick : attempt => console.log('delete :', { attempt })
},{
  icon    : 'edit',
  title   : 'Edit Person Served',
  onClick : attempt => console.log('delete :', { attempt })
},{
  icon    : 'edit',
  title   : 'Edit Attempt Notes',
  onClick : attempt => console.log('delete :', { attempt })
},{
  icon    : 'delete',
  title   : 'Delete',
  diabled : true,
  onClick : attempt => console.log('delete :', { attempt })
}])

//-----------  Empty Column  -----------//

const emptyCell = (empty) => ({ emptyText: (
  <Cell.Empty>
    <h4>No Attempts Recorded</h4>
    <h5>Record a attempt by clicking below.</h5>
    {empty}
  </Cell.Empty>
)})

//-----------  Component  -----------//

const AttemptsTable = ({ empty, records, ...props }) => {

  const columns = [
    attemptCol,
    partyCol(props),
    personCol,
    actionsCol(props),
  ]

  return (
    <RecordsTable columns={columns} locale={emptyCell(empty)} dataSource={records} { ...props } />
  )
}

//-----------  Prop Types  -----------//

AttemptsTable.propTypes = {
  empty           : PropTypes.node,
  records         : PropTypes.array,
  parties         : PropTypes.object.isRequired,
  modalActions    : PropTypes.object.isRequired,
  attemptsActions : PropTypes.object.isRequired,
}

//-----------  Export  -----------//

export default AttemptsTable
