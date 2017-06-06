//-----------  Imports  -----------//

import React, { PropTypes } from 'react'
import { Input, Button }    from 'antd'

import JobsTable            from 'containers/JobsTable'

import PageWrapper          from 'components/PageWrapper'
import RecordsHeader        from 'components/RecordsHeader'

import { recordsToArray }   from 'utils/records'

//-----------  Definitions  -----------//

const title  = 'Case Details'
const Search = Input.Search

let breadcrumbs = [{
  link  : '/',
  title : 'Dashboard'
},{
  link  : '/cases',
  title : 'Cases'
}]

//-----------  Component  -----------//

class CaseDetailsRoute extends React.Component {

  //-----------  Event Handlers  -----------//

  newJob = () => {
    const { caseID, modalActions } = this.props

    modalActions.showModal('JOB_FORM', {
      canSelect       : false,
      initialValues   : { case: caseID },
      onSubmitSuccess : modalActions.hideModal
    }, { title: 'Create Job' })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { kase, jobs, caseID, modalActions, ...props } = this.props
    const crumb = { title: kase ? kase.id : '...' }

    const records = recordsToArray(jobs)

    return (
      <PageWrapper title={title} loading={!kase} breadcrumbs={[ ...breadcrumbs, crumb ]}>
        <RecordsHeader
          title={kase ? `#${kase.id}` : title}
          count={records.length}
          countType='Jobs'
          subtitle={`${kase.plantiff} v. ${kase.defendant}`}
        >
          <Search placeholder='Search Jobs...' />
          <Button
            type='primary'
            icon='user-add'
            onClick={this.newJob}
          >
            Add Job
          </Button>
        </RecordsHeader>

        <JobsTable records={records} compact />
      </PageWrapper>
    )
  }
}

//-----------  Prop Types  -----------//

CaseDetailsRoute.propTypes = {
  kase         : PropTypes.object.isRequired,
  jobs         : PropTypes.object.isRequired,
  caseID       : PropTypes.string.isRequired,
  modalActions : PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default CaseDetailsRoute
