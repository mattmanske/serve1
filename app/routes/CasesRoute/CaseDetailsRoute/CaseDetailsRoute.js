//-----------  Imports  -----------//

import Route                from './styles'

import moment               from 'moment'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'
import Avatar               from 'react-avatar'
import { Icon,
         Input,
         Button,
         Popover }          from 'antd'

import RecordsTable         from 'components/RecordsTable'
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

//-----------  Table Columns  -----------//

const columns = [{
  key       : 'avatar',
  dataIndex : 'id',
  render    : id => (
    <Avatar name={id} size={40} textSizeRatio={3.5} round />
  )
// },{
//   key       : 'name',
//   title     : 'Name',
//   render    : (_, r) => `${r.first_name} ${r.last_name}`
// },{
//   key       : 'email',
//   title     : 'Email',
//   dataIndex : 'email',
// },{
//   key       : 'phone',
//   title     : 'Phone',
//   dataIndex : 'phone',
//   render    : p => p || (
//     <small>(use client)</small>
//   )
// },{
//   key       : 'address',
//   title     : 'Address',
//   dataIndex : 'address',
//   render    : address => (
//     <a>
//       {address ? address.split('\n').map((text, key) => (
//         <span key={key}>{text}<br/></span>
//       )) : (
//         <small>(use client)</small>
//       )}
//     </a>
//   )
// },{
//   key       : 'created',
//   title     : 'Created',
//   dataIndex : 'created_at',
//   render    : created_at => (
//     <small>{moment.utc(created_at).fromNow()}</small>
//   )
// },{
//   key       : 'actions',
//   render    : contact => (
//     <Popover
//       placement='left'
//       content={(
//         <Route.Actions>
//           <a><Icon type='edit' /> Edit Contact</a>
//           <a><Icon type='delete' /> Remove</a>
//         </Route.Actions>
//       )}
//     >
//       <Icon type='ellipsis' />
//     </Popover>
//   )
}]

//-----------  Component  -----------//

class CaseDetailsRoute extends React.Component {

  //-----------  Event Handlers  -----------//

  newJob = () => {
    const { kaseID, modalActions } = this.props

    modalActions.showModal('JOB_FORM', {
      canSelect       : false,
      initialValues   : { case: kaseID },
      onSubmitSuccess : modalActions.hideModal
    }, { title: 'Create Job' })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { kase, jobs, kaseID, modalActions, ...props } = this.props
    const crumb = { title: kase ? kase.id : '...' }

    const records = recordsToArray(jobs)

    return (
      <Route.Page title={title} loading={!kase} breadcrumbs={[ ...breadcrumbs, crumb ]}>
        <RecordsHeader
          title={kase.id || title}
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

        <RecordsTable
          columns={columns}
          dataSource={records}
        />
      </Route.Page>
    )
  }
}

//-----------  Prop Types  -----------//

CaseDetailsRoute.propTypes = {
  kase         : PropTypes.object.isRequired,
  jobs         : PropTypes.object.isRequired,
  kaseID       : PropTypes.string.isRequired,
  modalActions : PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default CaseDetailsRoute
