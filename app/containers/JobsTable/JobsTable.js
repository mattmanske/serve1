//-----------  Imports  -----------//

import React, { PropTypes } from 'react'
import { Button }           from 'antd'

import RecordsTable,
       { Cell, Columns }    from 'components/RecordsTable'

//-----------  Static Columns  -----------//

const nameCol = {
  key       : 'id',
  title     : 'Job ID',
  render    : job => (
    <Cell.Link to={`/jobs/${job.key}`}>
      <h5>{job.id}</h5>
      <h6>Status: {job.status || 'Draft'}</h6>
    </Cell.Link>
  )
}

//-----------  Dynamic Columns  -----------//

const caseCol = ({ cases, jobsActions, modalActions }) => ({
  key       : 'case',
  title     : 'Case',
  render    : job => (job.case && cases[job.case]) ? (
    <Cell.Link to={`/cases/${job.case}`}>
      <h5>{cases[job.case].id}</h5>
      <h6>{cases[job.case].plantiff} v. {cases[job.case].defendant}</h6>
    </Cell.Link>
  ) : (
    <Cell.Add onClick={() => {
      modalActions.showModal('CASE_FORM', {
        canSelect       : true,
        onSubmitSuccess : kase => {
          return new Promise((res, rej) => {
            const record = { ...job, case: kase.key, contact: kase.contact, client: kase.client }
            return jobsActions.update(record, res, rej)
          }).then(() => modalActions.hideModal())
        }
      }, { title: 'Attach Case' })
    }}>
      Attach Case
    </Cell.Add>
  )
})

const contactCol = ({ clients, contacts, jobsActions, modalActions }) => ({
  key       : 'contact',
  title     : 'Client Contact',
  render    : job => (job.contact && contacts[job.contact]) ? (
    <Cell.Link to={`/contacts/${job.contact}`}>
      <h5>{contacts[job.contact].first_name} {contacts[job.contact].last_name}</h5>
      {clients[job.client] && <h6>{clients[job.client].name}</h6>}
    </Cell.Link>
  ) : (
    <Cell.Add onClick={() => {
      modalActions.showModal('CONTACT_FORM', {
        canSelect       : true,
        onSubmitSuccess : contact => {
          return new Promise((res, rej) => {
            const record = { ...job, contact: contact.key, client: contact.client }
            return jobsActions.update(record, res, rej)
          }).then(() => modalActions.hideModal())
        }
      }, { title: 'Attach Contact' })
    }}>Attach Contact</Cell.Add>
  )
})

const servicesCol = ({ services }) => ({
  key       : 'services',
  title     : 'Attempts',
  dataIndex : 'key',
  className : 'centered',
  render    : key => services[key] || 0
})

const actionsCol = ({ modalActions }) => Columns.Actions([{
  icon    : 'edit',
  title   : 'Edit Job',
  onClick : job => modalActions.showModal('JOB_FORM', {
    initialValues   : job,
    onSubmitSuccess : modalActions.hideModal
  }, { title: job.id })
},{
  icon    : 'delete',
  title   : 'Delete',
  diabled : true,
  onClick : job => console.log('delete :', { job })
}])

//-----------  Component  -----------//

const JobsTable = ({ records, compact, ...props }) => {

  const columns = [
    Columns.Avatar('id', 'name'),
    nameCol,
    servicesCol(props),
    !compact && caseCol(props),
    contactCol(props),
    Columns.Created,
    actionsCol(props),
  ]

  return (
    <RecordsTable columns={columns} dataSource={records} { ...props } />
  )
}

//-----------  Prop Types  -----------//

JobsTable.propTypes = {
  records      : PropTypes.array,
  cases        : PropTypes.object,
  clients      : PropTypes.object,
  contacts     : PropTypes.object,
  services     : PropTypes.object,
  compact      : PropTypes.bool,
  jobsActions  : PropTypes.object.isRequired,
  modalActions : PropTypes.object.isRequired
}

//-----------  Export  -----------//

export default JobsTable
