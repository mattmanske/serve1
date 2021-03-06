//-----------  Imports  -----------//

import React, { PropTypes } from 'react'

import RecordsTable,
       { Cell, Columns }    from 'components/RecordsTable'

//-----------  Static Columns  -----------//

const nameCol = {
  key       : 'name',
  title     : 'Basic Info',
  render    : client => (
    <Cell.Link to={`/clients/${client.key}`}>
      <h5>{client.name}</h5>
      {client.id && <h6>{client.id}</h6>}
    </Cell.Link>
  )
}

const contactCol = {
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
  title   : 'Edit Client',
  onClick : client => modalActions.showModal('CLIENT_FORM', {
    initialValues   : client,
    onSubmitSuccess : modalActions.hideModal
  }, { title: client.name })
},{
  icon    : 'delete',
  title   : 'Delete',
  diabled : true,
  onClick : client => console.log('delete :', { client })
}])

//-----------  Empty Column  -----------//

const emptyCell = (empty) => ({ emptyText: (
  <Cell.Empty>
    <h4>No Clients Added</h4>
    <h5>Get started with the clients functionality by clicking below.</h5>
    {React.cloneElement(empty, { size: 'large', children: 'Add Your First Client' })}
  </Cell.Empty>
)})

//-----------  Component  -----------//

const ClientsTable = ({ empty, records, ...props }) => {

  const columns = [
    Columns.Avatar('name'),
    nameCol,
    contactCol,
    addressCol,
    actionsCol(props),
  ]

  return (
    <RecordsTable columns={columns} locale={emptyCell(empty)} dataSource={records} { ...props } />
  )
}

//-----------  Prop Types  -----------//

ClientsTable.propTypes = {
  empty        : PropTypes.node,
  records      : PropTypes.array,
  modalActions : PropTypes.object.isRequired
}

//-----------  Export  -----------//

export default ClientsTable
