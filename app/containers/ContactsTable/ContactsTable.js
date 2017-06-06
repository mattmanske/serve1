//-----------  Imports  -----------//

import React, { PropTypes } from 'react'

import RecordsTable,
       { Cell, Columns }    from 'components/RecordsTable'

//-----------  Static Columns  -----------//

const nameCol = {
  key       : 'name',
  title     : 'Name',
  render    : contact => (
    <Cell.Link to={`/contacts/${contact.key}`}>
      <h5>{contact.first_name} {contact.last_name}</h5>
      {contact.role && <h6>{contact.role}</h6>}
    </Cell.Link>
  )
}

const emailCol = {
  key       : 'email',
  title     : 'Email',
  dataIndex : 'email',
  render    : email => (
    <Cell.A href={`mailto:${email}`} target='_blank'>{email}</Cell.A>
  )
}

const phoneCol = {
  key       : 'phone',
  title     : 'Phone',
  dataIndex : 'phone',
  render    : phone => phone ? (
    <Cell.A href={`tel:${phone}`} target='_blank'>{phone}</Cell.A>
  ) : (
    <Cell.Small>(use client)</Cell.Small>
  )
}

const addressCol = {
  key       : 'address',
  title     : 'Address',
  dataIndex : 'address',
  render    : address => address ? (
    <Cell.Address>
      {address ? address.split('\n').map((text, key) => (
        <span key={key}>{text}<br/></span>
      )) : '-'}
    </Cell.Address>
  ) : (
    <Cell.Small>(use client)</Cell.Small>
  )
}

//-----------  Dynamic Columns  -----------//

const clientCol = ({ clients }) => ({
  key       : 'client',
  title     : 'Client',
  dataIndex : 'client',
  render    : client => clients[client] ? (
    <Cell.Link to={`/clients/${client}`}>
      <h5>{clients[client].name}</h5>
      {clients[client].id && <h6>{clients[client].id}</h6>}
    </Cell.Link>
  ) : (
    <Cell.Add>Attach Client</Cell.Add>
  )
})

const actionsCol = ({ modalActions }) => Columns.Actions([{
  icon    : 'edit',
  title   : 'Edit Contact',
  onClick : contact => modalActions.showModal('CONTACT_FORM', {
    initialValues   : contact,
    onSubmitSuccess : modalActions.hideModal
  }, { title: `${contact.first_name} ${contact.last_name}` })
},{
  icon    : 'delete',
  title   : 'Delete',
  diabled : true,
  onClick : contact => console.log('delete :', { contact })
}])

//-----------  Component  -----------//

const ContactsTable = ({ records, compact, ...props }) => {

  const columns = [
    Columns.Avatar('email'),
    nameCol,
    !compact && clientCol(props),
    emailCol,
    phoneCol,
    addressCol,
    actionsCol(props),
  ]

  return (
    <RecordsTable columns={columns} dataSource={records} { ...props } />
  )
}

//-----------  Prop Types  -----------//

ContactsTable.propTypes = {
  records      : PropTypes.array,
  clients      : PropTypes.object,
  compact      : PropTypes.bool,
  modalActions : PropTypes.object.isRequired
}

//-----------  Export  -----------//

export default ContactsTable
