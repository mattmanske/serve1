//-----------  Imports  -----------//

import React, { PropTypes } from 'react'
import { Button }           from 'antd'

import RecordsTable,
       { Cell, Columns }    from 'components/RecordsTable'

//-----------  Static Columns  -----------//

const nameCol = {
  key       : 'name',
  title     : 'Party',
  render    : party => (
    <Cell.Link to={`/parties/${party.key}`}>
      <h5>{party.name}</h5>
      <h6>{party.municipality}, {party.county} County, {party.state}</h6>
    </Cell.Link>
  )
}

const addressCol = {
  key       : 'address',
  title     : 'Address',
  dataIndex : 'address',
  render    : address => (
    <Cell.Address>
      {address ? address.split('\n').map((text, key) => (
        <span key={key}>{text}<br/></span>
      )) : '-'}
    </Cell.Address>
  )
}

//-----------  Dynamic Columns  -----------//

const actionsCol = ({ modalActions }) => Columns.Actions([{
  icon    : 'edit',
  title   : 'Edit Party',
  onClick : party => modalActions.showModal('PARTY_DORM', {
    initialValues   : party,
    onSubmitSuccess : modalActions.hideModal
  }, { title: party.name })
},{
  icon    : 'delete',
  title   : 'Delete',
  diabled : true,
  onClick : party => console.log('delete :', { party })
}])

//-----------  Component  -----------//

const PartiesTable = ({ records, ...props }) => {

  const columns = [
    nameCol,
    addressCol,
    actionsCol(props),
  ]

  return (
    <RecordsTable columns={columns} dataSource={records} { ...props } />
  )
}

//-----------  Prop Types  -----------//

PartiesTable.propTypes = {
  records        : PropTypes.array,
  modalActions   : PropTypes.object.isRequired
  partiesActions : PropTypes.object.isRequired,
}

//-----------  Export  -----------//

export default PartiesTable
