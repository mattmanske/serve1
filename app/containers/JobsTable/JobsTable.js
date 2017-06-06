//-----------  Imports  -----------//

import React, { PropTypes } from 'react'
import { Button }           from 'antd'

import RecordsTable,
       { Cell, Columns }    from 'components/RecordsTable'

//-----------  Table Columns  -----------//

const columns = [{
  key       : 'id',
  title     : 'Job ID',
  render    : job => (
    <Cell.Link to={`/jobs/${job.key}`}>
      <h5>{job.id}</h5>
      <h6>{job.status || 'Draft'}</h6>
    </Cell.Link>
  )
},{
  key       : 'case',
  title     : 'Case',
  dataIndex : 'case',
  render    : kase => kase ? (
    <Cell.Link>{kase}</Cell.Link>
  ) : (
    <Button icon='paper-clip' size='small' type='dashed'>Attach Case</Button>
  )
},{
  key       : 'contact',
  title     : 'Contact',
  dataIndex : 'contact',
  render    : contact => contact ? (
    <Cell.Link>{contact}</Cell.Link>
  ) : (
    <Button icon='paper-clip' size='small' type='dashed'>Attach Contact</Button>
  )
},{
  ...Columns.Created
}]

//-----------  Component  -----------//

const JobsTable = ({ records, modalActions, ...props }) => {

  const actions = Columns.Actions([{
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

  return (
    <RecordsTable columns={[ ...columns, actions ]} dataSource={records} { ...props } />
  )
}

//-----------  Prop Types  -----------//

JobsTable.propTypes = {
  records      : PropTypes.array,
  modalActions : PropTypes.object.isRequired
}

//-----------  Export  -----------//

export default JobsTable
