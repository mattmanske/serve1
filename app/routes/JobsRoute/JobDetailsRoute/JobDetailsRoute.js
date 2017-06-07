//-----------  Imports  -----------//

import moment               from 'moment'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'
import { Input,
         Badge,
         Button }           from 'antd'

import JobBody              from './JobBody'

import ServicesTable        from 'containers/ServicesTable'

import PageWrapper          from 'components/PageWrapper'
import RecordsHeader        from 'components/RecordsHeader'

import { recordsToArray }   from 'utils/records'
import { JOB_STATUS,
         jobStatusBadge }   from 'utils/constants'

//-----------  Definitions  -----------//

const title  = 'Job Details'
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
    const { jobID, redirectTo, servicesActions, modalActions } = this.props

    modalActions.showModal('PARTY_FORM', {
      canSelect       : true,
      onSubmitSuccess : party => {
        return new Promise((res, rej) => {
          const service = { party: party.key, job: jobID }
          return servicesActions.update(service, res, rej)
        }).then(modalActions.hideModal)
      }
    }, { title: 'Add Service' })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { job, jobID, services, modalActions, ...props } = this.props
    const crumb = { title: job ? job.id : '...' }

    const records = recordsToArray(services)

    const createButton = (
      <Button type='primary' icon='plus' onClick={this.newService}>
        Add Service
      </Button>
    )

    const badge = <Badge status={jobStatusBadge(job.status)} text={JOB_STATUS[job.status]} />
    const date  = (<span><strong>Date:</strong> {moment.utc().format('MMM Do, YYYY')}</span>)

    const bodyProps = {}

    return (
      <PageWrapper title={title} loading={!job} breadcrumbs={[ ...breadcrumbs, crumb ]}>
        <RecordsHeader
          title={job.id ? `Job ID: ${job.id}` : title}
          subtitle={badge}
        >
          <Button icon='user-add' onClick={this.assignTo}>
            Assign
          </Button>
          {createButton}
        </RecordsHeader>

        <JobBody { ...this.props } />

        <ServicesTable records={records} empty={createButton} />
      </PageWrapper>
    )
  }
}

//-----------  Prop Types  -----------//

JobDetailsRoute.propTypes = {
  job             : PropTypes.object.isRequired,
  jobID           : PropTypes.string.isRequired,
  kase            : PropTypes.object,
  client          : PropTypes.object,
  contact         : PropTypes.object,
  services        : PropTypes.object.isRequired,
  modalActions    : PropTypes.object.isRequired,
  servicesActions : PropTypes.object.isRequired,
}

//-----------  Exports  -----------//

export default JobDetailsRoute
