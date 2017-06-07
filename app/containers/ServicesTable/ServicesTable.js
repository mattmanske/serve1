//-----------  Imports  -----------//

import moment                 from 'moment'

import React, { PropTypes }   from 'react'
import { Button }             from 'antd'

import RecordsTable,
       { Cell, Columns }      from 'components/RecordsTable'

import { SERVICE_STATUS,
         serviceStatusBadge } from 'utils/constants'

//-----------  Static Columns  -----------//

const statusCol = {
  key       : 'status',
  width     : 120,
  title     : 'Status',
  dataIndex : 'status',
  render    : status => (
    <Cell.Status status={serviceStatusBadge(status)} text={SERVICE_STATUS[status]} />
  )
}

//-----------  Dynamic Columns  -----------//

const partyCol = ({ parties }) => ({
  key       : 'party',
  title     : 'Service Party',
  dataIndex : 'party',
  render    : party => (
    <Cell.Stacked>
      <h5>{parties[party].name}</h5>
      <h6>{parties[party].county} County, {parties[party].state}</h6>
    </Cell.Stacked>
  )
})

const assignedCol = () => ({
  key       : 'assigned_to',
  title     : 'Assigned To',
  dataIndex : 'assigned_to',
  render    : assigned_to => (
    <Cell.Small>-</Cell.Small>
  )
})

const actionsCol = ({ modalActions }) => Columns.Actions([{
  icon    : 'user-add',
  title   : 'Edit Party',
  onClick : service => console.log('edit party :', { service })
},{
  icon    : 'edit',
  title   : 'Edit Service',
  onClick : service => console.log('edit service :', { service })
},{
  icon    : 'delete',
  title   : 'Delete',
  diabled : true,
  onClick : service => console.log('delete :', { service })
}])

//-----------  Empty Column  -----------//

const emptyCell = (empty) => ({ emptyText: (
  <Cell.Empty>
    <h4>No Services Added</h4>
    <h5>Add a service by clicking below.</h5>
    {React.cloneElement(empty, { size: 'large', children: 'Add a Service' })}
  </Cell.Empty>
)})

//-----------  Component  -----------//

const ServicesTable = ({ empty, records, ...props }) => {

  const columns = [
    statusCol,
    partyCol(props),
    assignedCol(props),
    actionsCol(props),
  ]

  return (
    <RecordsTable columns={columns} locale={emptyCell(empty)} dataSource={records} { ...props } />
  )
}

//-----------  Prop Types  -----------//

ServicesTable.propTypes = {
  empty           : PropTypes.node,
  records         : PropTypes.array,
  parties         : PropTypes.object.isRequired,
  modalActions    : PropTypes.object.isRequired,
  servicesActions : PropTypes.object.isRequired,
}

//-----------  Export  -----------//

export default ServicesTable
