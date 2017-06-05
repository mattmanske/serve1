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

import { COURT_TYPES }      from 'utils/constants'
import { recordsToArray }   from 'utils/records'

//-----------  Definitions  -----------//

const title  = 'Cases'
const Search = Input.Search

const breadcrumbs = [{
  link  : '/',
  title : 'Dashboard'
},{
  title : 'Cases'
}]

//-----------  Table Columns  -----------//

const columns = [{
  key       : 'id',
  title     : 'Case',
  render    : kase => (
    <Route.Info to={`/cases/${kase.key}`}>
      <div>
        <h5>{kase.id}</h5>
        <h6>{kase.plantiff} v. {kase.defendant}</h6>
      </div>
    </Route.Info>
  )
},{
  key       : 'court',
  title     : 'Court',
  render    : kase => (
    <div>
      {COURT_TYPES[kase.court_type]}<br/>
      {kase.county} County, {kase.state}
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
  render    : kase => (
    <Popover
      placement='left'
      content={(
        <Route.Actions>
          <a><Icon type='edit' /> Edit Case</a>
          <a><Icon type='delete' /> Remove</a>
        </Route.Actions>
      )}
    >
      <Icon type='ellipsis' />
    </Popover>
  )
}]

//-----------  Component  -----------//

class CasesRoute extends React.Component {

  //-----------  Event Handlers  -----------//

  newCase = () => {
    const { modalActions } = this.props

    modalActions.showModal('CASE_FORM', {
      canSelect       : false,
      onSubmitSuccess : modalActions.hideModal
    }, { title: 'Add Case' })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { cases, clients, contacts, modalActions, ...props } = this.props
    const { data, error, isWatching } = cases

    const records = recordsToArray(data)

    return (
      <Route.Page title={title} loading={!isWatching} breadcrumbs={breadcrumbs}>
        <RecordsHeader title={title} count={records.length}>
          <Search placeholder='Search Cases...' disabled />
          <Button
            type='primary'
            icon='user-add'
            onClick={this.newCase}
          >
            Add Case
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

CasesRoute.propTypes = {
  cases        : PropTypes.object.isRequired,
  clients      : PropTypes.object.isRequired,
  contacts     : PropTypes.object.isRequired,
  modalActions : PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default CasesRoute
