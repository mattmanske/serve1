//-----------  Imports  -----------//

import React, { PropTypes } from 'react'
import { Button }           from 'antd'

import RecordsTable,
       { Cell, Columns }    from 'components/RecordsTable'

//-----------  Static Columns  -----------//

const typeCol = {
  key       : 'type',
  title     : 'Type',
  dataIndex : 'type',
}

//-----------  Dynamic Columns  -----------//

const actionsCol = ({ modalActions }) => Columns.Actions([{
  icon    : 'edit',
  title   : 'Edit Service',
  onClick : service => console.log('delete :', { service })
},{
  icon    : 'delete',
  title   : 'Delete',
  diabled : true,
  onClick : service => console.log('delete :', { service })
}])

//-----------  Component  -----------//

const ServicesTable = ({ records, ...props }) => {

  const columns = [
    typeCol,
    actionsCol(props),
  ]

  return (
    <RecordsTable columns={columns} dataSource={records} { ...props } />
  )
}

//-----------  Prop Types  -----------//

ServicesTable.propTypes = {
  records         : PropTypes.array,
  modalActions    : PropTypes.object.isRequired
  servicesActions : PropTypes.object.isRequired,
}

//-----------  Export  -----------//

export default ServicesTable
