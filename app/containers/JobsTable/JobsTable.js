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

const caseCol = ({ cases }) => ({
  key       : 'case',
  title     : 'Case',
  dataIndex : 'case',
  render    : kase => cases[kase] ? (
    <Cell.Link to={`/cases/${kase}`}>
      <h5>{cases[kase].id}</h5>
      <h6>{cases[kase].plantiff} v. {cases[kase].defendant}</h6>
    </Cell.Link>
  ) : (
    <Cell.Add>Attach Case</Cell.Add>
  )
})

const contactCol = ({ contacts }) => ({
  key       : 'contact',
  title     : 'Contact',
  dataIndex : 'contact',
  render    : contact => contacts[contact] ? (
    <Cell.Link to={`/contacts/${contact}`}>
      <h5>{contacts[contact].first_name} {contacts[contact].last_name}</h5>
      {contacts[contact].role && <h6>{contacts[contact].role}</h6>}
    </Cell.Link>
  ) : (
    <Cell.Add>Attach Contact</Cell.Add>
  )
})

const actionsCol = ({ modalActions }) => Columns.Actions([{
  icon    : 'edit',
  title   : 'Edit Case',
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

const JobsTable = ({ records, ...props }) => {

  const columns = [
    nameCol,
    caseCol(props),
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
  modalActions : PropTypes.object.isRequired
}

//-----------  Export  -----------//

export default JobsTable
