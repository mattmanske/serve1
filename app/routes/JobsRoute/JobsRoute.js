//-----------  Imports  -----------//

import Route                from './styles'

import moment               from 'moment'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'
import { Icon,
         Input,
         Button,
         Popover }          from 'antd'

import RecordsTable         from 'components/RecordsTable'
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

//-----------  Table Columns  -----------//

const columns = [{
  key       : 'id',
  title     : 'Job ID',
  render    : job => (
    <Route.Info to={`/jobs/${job.key}`}>
      <div>
        <h5>{job.id}</h5>
        {job.status && <h6>{job.status}</h6>}
      </div>
    </Route.Info>
  )
},{
  key       : 'case',
  title     : 'Case',
  dataIndex : 'case',
  render    : kase => (
    <div>
      <a>{kase}</a>
    </div>
  )
},{
  key       : 'contact',
  title     : 'Contact',
  render    : job => (
    <div>
      <a>{job.contact}</a><br/>
      {job.client && <a>{job.client}</a>}
    </div>
  )
},{
  key       : 'created',
  title     : 'Created',
  dataIndex : 'created_at',
  render    : created_at => (
    <small>{moment.utc(created_at).fromNow()}</small>
  )
},{
  key       : 'actions',
  render    : job => (
    <Popover
      placement='left'
      content={(
        <Route.Actions>
          <a><Icon type='edit' /> Edit Job</a>
          <a><Icon type='delete' /> Remove</a>
        </Route.Actions>
      )}
    >
      <Icon type='ellipsis' />
    </Popover>
  )
}]

//-----------  Component  -----------//

class JobsRoute extends React.Component {

  //-----------  Event Handlers  -----------//

  newJob = () => {
    const { modalActions } = this.props

    modalActions.showModal('JOB_FORM', {
      canSelect       : false,
      onSubmitSuccess : modalActions.hideModal
    }, { title: 'Start New Job' })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { jobs, cases, clients, contacts, ...props } = this.props
    const { data, error, isWatching } = jobs

    const records = recordsToArray(data)

    return (
      <Route.Page title={title} loading={!isWatching} breadcrumbs={breadcrumbs}>
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

        <RecordsTable
          columns={columns}
          dataSource={records}
        />
      </Route.Page>
    )
  }
}

//-----------  Prop Types  -----------//

JobsRoute.propTypes = {
  jobs         : PropTypes.object.isRequired,
  cases        : PropTypes.object.isRequired,
  clients      : PropTypes.object.isRequired,
  contacts     : PropTypes.object.isRequired,
  modalActions : PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default JobsRoute
