//-----------  Imports  -----------//

import React, { PropTypes } from 'react'

import RecordsTable,
       { Cell, Columns }    from 'components/RecordsTable'

import { COURT_TYPES }      from 'utils/constants'

//-----------  Table Columns  -----------//

const columns = [{
  key       : 'case',
  title     : 'Case',
  render    : kase => (
    <Cell.Link to={`/cases/${kase.key}`}>
      <h5>{kase.id}</h5>
      <h6>{kase.plantiff} v. {kase.defendant}</h6>
    </Cell.Link>
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
}]

//-----------  Component  -----------//

const CasesTable = ({ records, modalActions, ...props }) => {

  const actions = Columns.Actions([{
    icon    : 'edit',
    title   : 'Edit Case',
    onClick : kase => modalActions.showModal('CASE_FORM', {
      initialValues   : kase,
      onSubmitSuccess : modalActions.hideModal
    }, { title: kase.id })
  },{
    icon    : 'delete',
    title   : 'Delete',
    diabled : true,
    onClick : kase => console.log('delete :', { kase })
  }])

  return (
    <RecordsTable columns={[ ...columns, actions ]} dataSource={records} { ...props } />
  )
}

//-----------  Prop Types  -----------//

CasesTable.propTypes = {
  records      : PropTypes.array,
  modalActions : PropTypes.object.isRequired
}

//-----------  Export  -----------//

export default CasesTable
