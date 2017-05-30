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

const ContactsTable = ({ contacts, modalActions, ...props }) => {

  const actions = {
    key       : 'actions',
    dataIndex : 'id',
    render    : (_, r) => (
      <Popover
        placement='left'
        content={(
          <Contacts.Actions>
            <a onClick={() => modalActions.showModal('CONTACT_FORM', {
              title           : `${r.first_name} ${r.last_name}`,
              canSelect       : false,
              initialValues   : r,
              onSubmitSuccess : modalActions.hideModal,
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

  return (
    <Contacts.Table
      size='small'
      rowKey='id'
      pagination={false}
      dataSource={contacts}
      columns={[ ...columns, actions ]}
      { ...props }
    />
  )
}

//-----------  Prop Types  -----------//

ContactsTable.propTypes = {
  contacts     : PropTypes.array.isRequired,
  modalActions : PropTypes.object.isRequired
}

//-----------  Export  -----------//

export default ContactsTable
