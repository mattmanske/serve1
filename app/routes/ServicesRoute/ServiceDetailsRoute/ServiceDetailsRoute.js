//-----------  Imports  -----------//

import React, { PropTypes } from 'react'
import { Input, Button }    from 'antd'

import ContactsTable        from 'containers/ContactsTable'

import PageWrapper          from 'components/PageWrapper'
import RecordsHeader        from 'components/RecordsHeader'

import { recordsToArray }   from 'utils/records'

//-----------  Definitions  -----------//

const title  = 'Service Details'
const Search = Input.Search

let breadcrumbs = [{
  link  : '/',
  title : 'Dashboard'
},{
  link  : '/services',
  title : 'Services'
}]

//-----------  Component  -----------//

class ServiceDetailsRoute extends React.Component {

  //-----------  Event Handlers  -----------//

  newContact = () => {
    const { serviceID, modalActions } = this.props

    modalActions.showModal('CONTACT_FORM', {
      canSelect       : false,
      initialValues   : { service: serviceID },
      onSubmitSuccess : modalActions.hideModal
    }, { title: 'Add Service Contact' })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { service, contacts, serviceID, modalActions, ...props } = this.props
    const crumb = { title: service ? service.name : '...' }

    const records = recordsToArray(contacts)

    return (
      <PageWrapper title={title} loading={!service} breadcrumbs={[ ...breadcrumbs, crumb ]}>
        <RecordsHeader
          title={service.name || title}
          count={records.length}
          countType='Contact'
          subtitle={service.id}
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

        <ContactsTable records={records} compact />
      </PageWrapper>
    )
  }
}

//-----------  Prop Types  -----------//

ServiceDetailsRoute.propTypes = {
  jobs         : PropTypes.object.isRequired,
  service       : PropTypes.object.isRequired,
  contacts     : PropTypes.object.isRequired,
  serviceID     : PropTypes.string.isRequired,
  modalActions : PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default ServiceDetailsRoute
