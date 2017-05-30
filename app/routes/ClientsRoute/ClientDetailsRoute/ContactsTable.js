//-----------  Imports  -----------//

import Contacts             from './styles'

import React, { PropTypes } from 'react'
import { Icon,
         Modal,
         Button,
         Popover }          from 'antd'

//-----------  Definitions  -----------//

const confirm = Modal.confirm
const columns = [{
  key       : 'name',
  title     : 'Name',
  render    : (_, r) => `${r.first_name} ${r.last_name}`
},{
  key       : 'email',
  title     : 'Email',
  dataIndex : 'email',
},{
  key       : 'phone',
  title     : 'Phone',
  dataIndex : 'phone',
  render    : p => p || '-'
}]

//-----------  Component  -----------//

const ContactsTable = ({ contacts, clientID, modalActions, ...props }) => {

  const actions = {
    key       : 'actions',
    dataIndex : 'id',
    render    : (_, r) => (
      <Popover
        placement='left'
        content={(
          <Contacts.Actions>
            <a onClick={() => modalActions.showModal('CONTACT_FORM', {
              canSelect          : false,
              initialValues      : { ...r, client: clientID },
              onSubmitSuccess    : modalActions.hideModal,
              enableReinitialize : true,
            }, {
              title: `${r.first_name} ${r.last_name}`,
            })}>
              <Icon type='edit' /> Edit
            </a>
            <a onClick={() => confirm({
              title   : 'Confirm Deletion',
              content : `All of ${r.first_name} ${r.last_name}\'s data will be deleted. This action cannot be undone.`
            })}>
              <Icon type='delete' /> Delete
            </a>
          </Contacts.Actions>
        )}
      >
        <Button size='small' shape='circle' icon='ellipsis' />
      </Popover>
    )
  }

  const footer = () => (
    <Button
      icon='plus'
      size='small'
      onClick={() => modalActions.showModal('CONTACT_FORM', {
        canSelect          : false,
        initialValues      : { client: clientID },
        onSubmitSuccess    : modalActions.hideModal,
        enableReinitialize : true,
      }, {
        title: 'Add New Contact'
      })}
    >
      Add Contact
    </Button>
  )

  return (
    <Contacts.Table
      size='small'
      rowKey='id'
      footer={footer}
      pagination={false}
      dataSource={contacts}
      columns={[ ...columns, actions ]}
      { ...props }
    />
  )
}

//-----------  Prop Types  -----------//

ContactsTable.propTypes = {
  clientID     : PropTypes.string.isRequired,
  contacts     : PropTypes.array.isRequired,
  modalActions : PropTypes.object.isRequired
}

//-----------  Export  -----------//

export default ContactsTable
