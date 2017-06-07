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
  link  : '/jobs',
  title : 'Jobs'
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
    const { job, jobID, service, serviceID, modalActions, ...props } = this.props

    const jobCrumb = { link: `/jobs/${jobID}`, title: job.id }
    const serCrumb = { title: 'Service' }

    // const records = recordsToArray(contacts)

    return (
      <PageWrapper title={title} loading={!service} breadcrumbs={[ ...breadcrumbs, jobCrumb, serCrumb ]}>
        <RecordsHeader
          title={service.name || title}
          // count={records.length}
          // countType='Contact'
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

        {/* <ContactsTable records={records} compact /> */}
      </PageWrapper>
    )
  }
}

//-----------  Prop Types  -----------//

ServiceDetailsRoute.propTypes = {
  job          : PropTypes.object.isRequired,
  jobID        : PropTypes.string.isRequired,
  service      : PropTypes.object.isRequired,
  serviceID    : PropTypes.string.isRequired,
  modalActions : PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default ServiceDetailsRoute
