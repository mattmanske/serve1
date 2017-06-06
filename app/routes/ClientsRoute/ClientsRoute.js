//-----------  Imports  -----------//

import React, { PropTypes } from 'react'
import { Input, Button }    from 'antd'

import ClientsTable         from 'containers/ClientsTable'

import PageWrapper          from 'components/PageWrapper'
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

//-----------  Component  -----------//

class ClientsRoute extends React.Component {

  //-----------  Event Handlers  -----------//

  newClient = () => {
    const { redirectTo, modalActions } = this.props

    modalActions.showModal('CLIENT_FORM', {
      canSelect       : false,
      onSubmitSuccess : clientID => {
        redirectTo(`clients/${clientID}`)
        modalActions.hideModal()
      }
    }, { title: 'Add Client' })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { clients, modalActions, ...props } = this.props
    const { data, error, isWatching } = clients

    const records = recordsToArray(data)

    return (
      <PageWrapper title={title} loading={!isWatching} breadcrumbs={breadcrumbs}>
        <RecordsHeader title={title} count={records.length}>
          <Search placeholder='Search Clients...' disabled />
          <Button
            type='primary'
            icon='user-add'
            onClick={this.newClient}
          >
            Add Client
          </Button>
        </RecordsHeader>

        <ClientsTable records={records} />
      </PageWrapper>
    )
  }
}

//-----------  Prop Types  -----------//

ClientsRoute.propTypes = {
  clients      : PropTypes.object.isRequired,
  redirectTo   : PropTypes.func.isRequired,
  modalActions : PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default ClientsRoute
