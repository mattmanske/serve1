//-----------  Imports  -----------//

import React, { PropTypes } from 'react'
import { Input, Button }    from 'antd'

import JobsTable            from 'containers/JobsTable'

import PageWrapper          from 'components/PageWrapper'
import RecordsHeader        from 'components/RecordsHeader'

import { recordsToArray }   from 'utils/records'

//-----------  Definitions  -----------//

const title  = 'Jobs'
const Search = Input.Search

const breadcrumbs = [{
  link  : '/',
  title : 'Dashboard'
},{
  title : 'Jobs'
}]

//-----------  Component  -----------//

class JobsRoute extends React.Component {

  //-----------  Event Handlers  -----------//

  newJob = () => {
    const { redirectTo, modalActions } = this.props

    modalActions.showModal('JOB_FORM', {
      canSelect       : false,
      onSubmitSuccess : jobID => {
        redirectTo(`jobs/${jobID}`)
        modalActions.hideModal()
      }
    }, { title: 'Start New Job' })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { jobs, cases, clients, contacts, ...props } = this.props
    const { data, error, isWatching } = jobs

    const records = recordsToArray(data)

    return (
      <PageWrapper title={title} loading={!isWatching} breadcrumbs={breadcrumbs}>
        <RecordsHeader title={title} count={records.length}>
          <Search placeholder='Search Jobs...' disabled />
          <Button
            type='primary'
            icon='user-add'
            onClick={this.newJob}
          >
            Add Job
          </Button>
        </RecordsHeader>

        <JobsTable records={records} />
      </PageWrapper>
    )
  }
}

//-----------  Prop Types  -----------//

JobsRoute.propTypes = {
  jobs         : PropTypes.object.isRequired,
  redirectTo   : PropTypes.func.isRequired,
  modalActions : PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default JobsRoute
