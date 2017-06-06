//-----------  Imports  -----------//

import React, { PropTypes } from 'react'

import RecordsTable,
       { Cell, Columns }    from 'components/RecordsTable'

import { COURT_TYPES }      from 'utils/constants'

//-----------  Static Columns  -----------//

const nameCol = {
  key       : 'case',
  title     : 'Case',
  render    : kase => (
    <Cell.Link to={`/cases/${kase.key}`}>
      <h5>{kase.id}</h5>
      <h6>{kase.plantiff} v. {kase.defendant}</h6>
    </Cell.Link>
  )
}

const courtCol = {
  key       : 'court',
  title     : 'Court',
  render    : kase => (
    <div>
      {COURT_TYPES[kase.court_type]}<br/>
      {kase.county} County, {kase.state}
    </div>
  )
}

//-----------  Dynamic Columns  -----------//

const actionsCol = ({ modalActions }) => Columns.Actions([{
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

//-----------  Component  -----------//

const CasesTable = ({ records, ...props }) => {

  const columns = [
    nameCol,
    courtCol,
    actionsCol(props),
  ]

  return (
    <RecordsTable columns={columns} dataSource={records} { ...props } />
  )
}

//-----------  Prop Types  -----------//

CasesTable.propTypes = {
  records      : PropTypes.array,
  modalActions : PropTypes.object.isRequired
}

//-----------  Export  -----------//

export default CasesTable
