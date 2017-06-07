//-----------  Imports  -----------//

import React, { PropTypes }     from 'react'
import { Badge, Input, Button } from 'antd'
import { Link }                 from 'react-router'

import ServicesTable            from 'containers/ServicesTable'

import PageWrapper              from 'components/PageWrapper'
import RecordsHeader            from 'components/RecordsHeader'

import { recordsToArray }       from 'utils/records'
import { JOB_STATUS,
         jobStatusBadge }       from 'utils/constants'

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

  //-----------  HTML Render  -----------//

  render(){
    const { job, jobID, services, modalActions, ...props } = this.props
    const crumb = { title: job ? job.id : '...' }

    const records = recordsToArray(services)

    const createButton = (
      <Link to={`/jobs/${jobID}/services/`}>
        <Button type='primary' icon='plus'>
          Record Service
        </Button>
      </Link>
    )

    const subtitle = <Badge status={jobStatusBadge(job.status)} text={JOB_STATUS[job.status]} />

    return (
      <PageWrapper title={title} loading={!job} breadcrumbs={[ ...breadcrumbs, crumb ]}>
        <RecordsHeader
          title={job.id || title}
          count={records.length}
          countType='Attempt'
          subtitle={subtitle}
        >
          <Search placeholder='Search Services...' />
          {createButton}
        </RecordsHeader>

        <ServicesTable records={records} empty={createButton} />
      </PageWrapper>
    )
  }
}

//-----------  Prop Types  -----------//

JobDetailsRoute.propTypes = {
  job          : PropTypes.object.isRequired,
  jobID        : PropTypes.string.isRequired,
  services     : PropTypes.object.isRequired,
  modalActions : PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default JobDetailsRoute
