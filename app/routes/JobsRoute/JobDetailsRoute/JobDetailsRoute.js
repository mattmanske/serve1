//-----------  Imports  -----------//

import Route                from './styles'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'
import { Button }           from 'antd'

//-----------  Definitions  -----------//

const title = 'Job Details'

const breadcrumbs = [{
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
    const { job, jobID, ...props } = this.props
    const crumb = { title: jobID || '...' }

    return (
      <Route.Page title={title} loading={!job} breadcrumbs={[ ...breadcrumbs, crumb ]}>
        <h4>Csae Number:</h4>
        <h1>{jobID}</h1>
        <Link to={'/jobs/${jobID}/jobs/new'}>
          <Button size='large'>Start New Job</Button>
        </Link>
      </Route.Page>
    )
  }
}

//-----------  Prop Types  -----------//

JobDetailsRoute.propTypes = {
  job   : PropTypes.object.isRequired,
  jobID : PropTypes.string.isRequired
}

//-----------  Exports  -----------//

export default JobDetailsRoute
