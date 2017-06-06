//-----------  Imports  -----------//

import React, { PropTypes } from 'react'
import { Input, Button }    from 'antd'

// import ContactsTable        from 'containers/ContactsTable'

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
  link  : '/jobs',
  title : 'Jobs'
}]

//-----------  Component  -----------//

class JobDetailsRoute extends React.Component {

  //-----------  Event Handlers  -----------//

  newService = () => {
    // const { clientID, modalActions } = this.props
    //
    // modalActions.showModal('CONTACT_FORM', {
    //   canSelect       : false,
    //   initialValues   : { client: clientID },
    //   onSubmitSuccess : modalActions.hideModal
    // }, { title: 'Add Client Contact' })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { job, jobID, modalActions, ...props } = this.props
    const crumb = { title: job ? job.id : '...' }

    // const records = recordsToArray(contacts)

    return (
      <PageWrapper title={title} loading={!job} breadcrumbs={[ ...breadcrumbs, crumb ]}>
        <RecordsHeader
          title={job.id}
          // count={services.length}
          // countType='Contact'
          subtitle={`Status: ${job.status || 'Draft'}`}
        >
          <Search placeholder='Search Services...' />
          <Button
            type='primary'
            icon='user-add'
            onClick={this.newServoice}
          >
            Add Service
          </Button>
        </RecordsHeader>

        {/* <ContactsTable records={records} compact /> */}
      </PageWrapper>
    )
  }
}

//-----------  Prop Types  -----------//

JobDetailsRoute.propTypes = {
  job          : PropTypes.object.isRequired,
  jobID        : PropTypes.string.isRequired,
  modalActions : PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default JobDetailsRoute
