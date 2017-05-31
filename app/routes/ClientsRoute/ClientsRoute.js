//-----------  Imports  -----------//

import Route                from './styles'

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

const title  = 'Clients'
const Search = Input.Search

const breadcrumbs = [{
  link  : '/',
  title : 'Dashboard'
},{
  title : 'Clients'
}]

const columns = [{
  key       : 'avatar',
  dataIndex : 'name',
  render    : name => (
    <Avatar name={name} size={40} textSizeRatio={3.5} round />
  )
},{
  key       : 'name',
  title     : 'Basic Info',
  render    : client => (
    <Route.Info to={`/clients/${client.key}`}>
      <div>
        <h5>{client.name}</h5>
        {client.id && <h6>{client.id}</h6>}
      </div>
    </Route.Info>
  )
},{
  key       : 'contact',
  title     : 'Email / Phone',
  render    : client => (
    <div>
      <a><Icon type='mail' /> {client.email}</a><br/>
      {client.phone && <a><Icon type='phone' /> {client.phone}</a>}
    </div>
  )
},{
  key       : 'address',
  title     : 'Address',
  dataIndex : 'address',
  render    : address => (
    <a>
      {address ? address.split('\n').map((text, key) => (
        <span key={key}>{text}<br/></span>
      )) : '-'}
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
  render    : client => (
    <Popover
      placement='left'
      content={(
        <Route.Actions>
          <a><Icon type='edit' /> Edit Client</a>
          <a><Icon type='delete' /> Remove</a>
        </Route.Actions>
      )}
    >
      <Icon type='ellipsis' />
    </Popover>
  )
}]

//-----------  Component  -----------//

class ClientsRoute extends React.Component {

  //-----------  Event Handlers  -----------//

  newClient = () => {
    const { modalActions } = this.props

    modalActions.showModal('CLIENT_FORM', {
      canSelect       : false,
      onSubmitSuccess : modalActions.hideModal
    }, { title: 'Add Client' })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { clients, contacts, modalActions, ...props } = this.props
    const { data, error, isWatching } = clients

    const records = recordsToArray(data)

    return (
      <Route.Page title={title} loading={!isWatching} breadcrumbs={breadcrumbs}>
        <RecordsHeader title={title} count={records.length}>
          <Search placeholder='Search Clients...' />
          <Button
            type='primary'
            icon='user-add'
            onClick={this.newClient}
          >
            Add Client
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

ClientsRoute.propTypes = {
  clients      : PropTypes.object.isRequired,
  contacts     : PropTypes.object.isRequired,
  modalActions : PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default ClientsRoute
