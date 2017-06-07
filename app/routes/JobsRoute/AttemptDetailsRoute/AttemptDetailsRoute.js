//-----------  Imports  -----------//

import React, { PropTypes } from 'react'
import { Input, Button }    from 'antd'

import ContactsTable        from 'containers/ContactsTable'

import PageWrapper          from 'components/PageWrapper'
import RecordsHeader        from 'components/RecordsHeader'

import { recordsToArray }   from 'utils/records'

//-----------  Definitions  -----------//

const title  = 'Attempt Details'
const Search = Input.Search

let breadcrumbs = [{
  link  : '/',
  title : 'Dashboard'
},{
  link  : '/jobs',
  title : 'Jobs'
}]

//-----------  Component  -----------//

class AttemptDetailsRoute extends React.Component {

  //-----------  Event Handlers  -----------//

  newContact = () => {
    const { attemptID, modalActions } = this.props

    modalActions.showModal('CONTACT_FORM', {
      canSelect       : false,
      initialValues   : { attempt: attemptID },
      onSubmitSuccess : modalActions.hideModal
    }, { title: 'Add Attempt Contact' })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { job, jobID, attempt, attemptID, modalActions, ...props } = this.props

    const jobCrumb = { link: `/jobs/${jobID}`, title: job.id }
    const serCrumb = { title: 'Attempt' }

    // const records = recordsToArray(contacts)

    return (
      <PageWrapper title={title} loading={!attempt} breadcrumbs={[ ...breadcrumbs, jobCrumb, serCrumb ]}>
        <RecordsHeader
          title={attempt.name || title}
          // count={records.length}
          // countType='Contact'
          subtitle={attempt.id}
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

AttemptDetailsRoute.propTypes = {
  job          : PropTypes.object.isRequired,
  jobID        : PropTypes.string.isRequired,
  attempt      : PropTypes.object.isRequired,
  attemptID    : PropTypes.string.isRequired,
  modalActions : PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default AttemptDetailsRoute
