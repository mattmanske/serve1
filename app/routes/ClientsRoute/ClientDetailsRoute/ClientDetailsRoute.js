//-----------  Imports  -----------//

import Route                from './../styles'

import moment               from 'moment'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'
import Avatar               from 'react-avatar'
import { Icon,
         Input,
         Button,
         Popover }          from 'antd'

import RecordsTable         from 'components/RecordsTable'
import RecordsHeader        from 'components/RecordsHeader'

import { recordsToArray }   from 'utils/records'


//-----------  Definitions  -----------//

const title  = 'Client Details'
const Search = Input.Search

let breadcrumbs = [{
  link  : '/',
  title : 'Dashboard'
},{
  link  : '/clients',
  title : 'Clients'
}]

const columns = [{
  key       : 'avatar',
  dataIndex : 'email',
  render    : email => (
    <Avatar email={email} size={40} textSizeRatio={3.5} round />
  )
},{
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
  render    : p => p || (
    <small>(use client)</small>
  )
},{
  key       : 'address',
  title     : 'Address',
  dataIndex : 'address',
  render    : address => (
    <a>
      {address ? address.split('\n').map((text, key) => (
        <span key={key}>{text}<br/></span>
      )) : (
        <small>(use client)</small>
      )}
    </a>
  )
},{
  key       : 'created',
  title     : 'Created',
  dataIndex : 'created_at',
  render    : created_at => (
    <small>{moment.utc(created_at).fromNow()}</small>
  )
},{
  key       : 'actions',
  render    : contact => (
    <Popover
      placement='left'
      content={(
        <Route.Actions>
          <a><Icon type='edit' /> Edit Contact</a>
          <a><Icon type='delete' /> Remove</a>
        </Route.Actions>
      )}
    >
      <Icon type='ellipsis' />
    </Popover>
  )
}]

//-----------  Component  -----------//

class ClientDetailsRoute extends React.Component {

  //-----------  Event Handlers  -----------//

  newContact = () => {
    const { clientID, modalActions } = this.props

    modalActions.showModal('CONTACT_FORM', {
      canSelect       : false,
      initialValues   : { client: clientID },
      onSubmitSuccess : modalActions.hideModal
    }, { title: 'Add Client Contact' })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { client, contacts, clientID, modalActions, ...props } = this.props
    const crumb = { title: client ? client.name : '...' }

    const records = recordsToArray(contacts)

    return (
      <Route.Page title={title} loading={!client} breadcrumbs={[ ...breadcrumbs, crumb ]}>
        <RecordsHeader
          title={client.name || title}
          count={records.length}
          countType='Contact'
          subtitle={client.id}
        >
          <Search placeholder='Search Contacts...' />
          <Button
            type='primary'
            icon='user-add'
            onClick={this.newContact}
          >
            Add Contact
          </Button>
        </RecordsHeader>

        <RecordsTable
          columns={columns}
          dataSource={records}
        />
      </Route.Page>
    )
  }
}

//-----------  Prop Types  -----------//

ClientDetailsRoute.propTypes = {
  client       : PropTypes.object.isRequired,
  contacts     : PropTypes.object.isRequired,
  clientID     : PropTypes.string.isRequired,
  modalActions : PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default ClientDetailsRoute
