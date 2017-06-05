//-----------  Imports  -----------//

import React, { PropTypes } from 'react'

import RecordsTable,
       { Cell, Columns }    from 'components/RecordsTable'

//-----------  Table Columns  -----------//

const columns = [{
  ...Columns.Avatar('name'),
},{
  key       : 'name',
  title     : 'Basic Info',
  render    : client => (
    <Cell.Link to={`/clients/${client.key}`}>
      <h5>{client.name}</h5>
      {client.id && <h6>{client.id}</h6>}
    </Cell.Link>
  )
},{
  key       : 'contact',
  title     : 'Email / Phone',
  render    : client => (
    <Cell.Stacked>
      <Cell.A href={`mailto:${client.email}`} target='_blank'>{client.email}</Cell.A>
      {client.phone &&
        <Cell.A href={`tel:${client.phone}`} target='_blank'>{client.phone}</Cell.A>
      }
    </Cell.Stacked>
  )
},{
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
}]

//-----------  Component  -----------//

const ClientsTable = ({ records, modalActions, ...props }) => {

  const actions = Columns.Actions([{
    icon    : 'edit',
    title   : 'Edit Client',
    onClick : () => console.log('edit')
  },{
    icon    : 'delete',
    title   : 'Delete',
    onClick : () => console.log('delete')
  }])

  return (
    <RecordsTable columns={[ ...columns, actions ]} dataSource={records} { ...props } />
  )
}

//-----------  Prop Types  -----------//

ClientsTable.propTypes = {
  records      : PropTypes.array,
  modalActions : PropTypes.object.isRequired
}

//-----------  Export  -----------//

export default ClientsTable
