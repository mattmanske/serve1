//-----------  Imports  -----------//

import moment               from 'moment'

import React, { PropTypes } from 'react'
import { Button }           from 'antd'

import RecordsTable,
       { Cell, Columns }    from 'components/RecordsTable'

import { SERVICE_TYPES }    from 'utils/constants'

//-----------  Static Columns  -----------//

const serviceCol = {
  key       : 'service',
  title     : 'Service',
  render    : service => (
    <Cell.Link to={`/jobs/${service.job}/services/${service.key}`}>
      <h5>{SERVICE_TYPES[service.type]}</h5>
      <h6>{moment.utc(service.serviced_at).format('MMM Do, YYYY')}</h6>
    </Cell.Link>
  )
}

const personCol = {
  key       : 'person',
  title     : 'Person Served',
  render    : service => service.person_name ? (
    <Cell.Stacked>
      <h5>{service.person_name}</h5>
      <h6>{service.person_title}</h6>
    </Cell.Stacked>
  ) : (<Cell.Small>n/a</Cell.Small>)
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

const actionsCol = ({ modalActions }) => Columns.Actions([{
  icon    : 'edit',
  title   : 'Edit Service Party',
  onClick : service => console.log('delete :', { service })
},{
  icon    : 'edit',
  title   : 'Edit Service Details',
  onClick : service => console.log('delete :', { service })
},{
  icon    : 'edit',
  title   : 'Edit Person Served',
  onClick : service => console.log('delete :', { service })
},{
  icon    : 'edit',
  title   : 'Edit Service Notes',
  onClick : service => console.log('delete :', { service })
},{
  icon    : 'delete',
  title   : 'Delete',
  diabled : true,
  onClick : service => console.log('delete :', { service })
}])

//-----------  Empty Column  -----------//

const emptyCell = (empty) => ({ emptyText: (
  <Cell.Empty>
    <h4>No Services Recorded</h4>
    <h5>Record a service by clicking below.</h5>
    {empty}
  </Cell.Empty>
)})

//-----------  Component  -----------//

const ServicesTable = ({ empty, records, ...props }) => {

  const columns = [
    serviceCol,
    partyCol(props),
    personCol,
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