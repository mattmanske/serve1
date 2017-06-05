//-----------  Imports  -----------//

import React, { PropTypes } from 'react'

import RecordsTable,
       { Cell, Columns }    from 'components/RecordsTable'

//-----------  Table Columns  -----------//

const columns = [{
  ...Columns.Avatar('email'),
},{
  key       : 'name',
  title     : 'Name',
  render    : contact => (
    <Cell.Link to={`/contacts/${contact.key}`}>
      <h5>{contact.first_name} {contact.last_name}</h5>
      {contact.role && <h6>{contact.role}</h6>}
    </Cell.Link>
  )
},{
  key       : 'email',
  title     : 'Email',
  dataIndex : 'email',
  render    : email => (
    <Cell.A href={`mailto:${email}`} target='_blank'>{email}</Cell.A>
  )
},{
  key       : 'phone',
  title     : 'Phone',
  dataIndex : 'phone',
  render    : phone => phone ? (
    <Cell.A href={`tel:${phone}`} target='_blank'>{phone}</Cell.A>
  ) : (
    <Cell.Small>(use client)</Cell.Small>
  )
},{
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
}]

//-----------  Component  -----------//

const ContactsTable = ({ records, modalActions, ...props }) => {

  const actions = Columns.Actions([{
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

  return (
    <RecordsTable columns={[ ...columns, actions ]} dataSource={records} { ...props } />
  )
}

//-----------  Prop Types  -----------//

ContactsTable.propTypes = {
  records      : PropTypes.array,
  modalActions : PropTypes.object.isRequired
}

//-----------  Export  -----------//

export default ContactsTable
