//-----------  Imports  -----------//

import React, { PropTypes } from 'react'
import { Input, Button }    from 'antd'

import ContactsTable        from 'containers/ContactsTable'

import PageWrapper          from 'components/PageWrapper'
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
      <PageWrapper title={title} loading={!client} breadcrumbs={[ ...breadcrumbs, crumb ]}>
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

        <ContactsTable records={records} />
      </PageWrapper>
    )
  }
}

//-----------  Prop Types  -----------//

ClientDetailsRoute.propTypes = {
  jobs         : PropTypes.object.isRequired,
  client       : PropTypes.object.isRequired,
  contacts     : PropTypes.object.isRequired,
  clientID     : PropTypes.string.isRequired,
  modalActions : PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default ClientDetailsRoute
