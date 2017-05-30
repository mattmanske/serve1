//-----------  Imports  -----------//

import Route                from './styles'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'
import { Button }           from 'antd'

import JobRollup            from './JobRollup'

import { recordsToArray }   from 'utils/records'

//-----------  Definitions  -----------//

const title = 'Jobs'

const breadcrumbs = [{
  link  : '/',
  title : 'Dashboard'
},{
  title : 'Jobs'
}]

//-----------  Component  -----------//

class JobsRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { jobs, cases, ...props } = this.props
    const { data, error, isWatching } = jobs

    const records = recordsToArray(data)

    return (
      <Route.Page title={title} loading={!isWatching} breadcrumbs={breadcrumbs}>
        <h1>Jobs</h1>
        <Link to={'/jobs/new'}>
          <Button size='large'>Start New Job</Button>
        </Link>

        {records.map(job => (
          <JobRollup
            key={job.id}
            job={job}
            kase={cases && cases[job.case]}
          />
        ))}
      </Route.Page>
    )
  }
}

//-----------  Prop Types  -----------//

JobsRoute.propTypes = {
  jobs  : PropTypes.object.isRequired,
  cases : PropTypes.object.isRequired,
}

//-----------  Exports  -----------//

export default JobsRoute
