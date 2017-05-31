//-----------  Imports  -----------//

import Route                from './styles'

import React, { PropTypes } from 'react'
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

class ClientDetailsRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { client, contacts, clientID, modalActions, ...props } = this.props
    const crumb = { title: client ? client.name : '...' }

    const records = recordsToArray(contacts)

    return (
      <Route.Page title={title} loading={!client} breadcrumbs={[ ...breadcrumbs, crumb ]}>
        <RecordsHeader title={client.name} count={records.length}>
          <Search placeholder='Search Contacts...' />
          <Button
            type='primary'
            icon='user-add'
            // onClick={this.newClient}
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
