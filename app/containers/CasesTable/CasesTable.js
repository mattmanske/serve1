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

const clientCol = ({ clients, casesActions, modalActions }) => ({
  key       : 'client',
  title     : 'Client',
  render    : kase => (kase.client && clients[kase.client]) ? (
    <Cell.Link to={`/clients/${kase.client}`}>
      <h5>{clients[kase.client].name}</h5>
      {clients[kase.client].id && <h6>{clients[kase.client].id}</h6>}
    </Cell.Link>
  ) : (
    <Cell.Add onClick={() => {
      modalActions.showModal('CLIENT_FORM', {
        canSelect       : true,
        onSubmitSuccess : client => {
          return new Promise((res, rej) => {
            const record = { ...kase, client: client.key }
            return casesActions.update(record, res, rej)
          }).then(() => modalActions.hideModal())
        }
      }, { title: 'Attach Client' })
    }}>
      Attach Client
    </Cell.Add>
  )
})

const contactCol = ({ clients, contacts, casesActions, modalActions }) => ({
  key       : 'contact',
  title     : 'Client Contact',
  render    : kase => (kase.contact && contacts[kase.contact]) ? (
    <Cell.Link to={`/contacts/${kase.contact}`}>
      <h5>{contacts[kase.contact].first_name} {contacts[kase.contact].last_name}</h5>
      {contacts[kase.contact].role && <h6>{contacts[kase.contact].role}</h6>}
    </Cell.Link>
  ) : (
    <Cell.Add onClick={() => {
      modalActions.showModal('CONTACT_FORM', {
        canSelect       : true,
        onSubmitSuccess : contact => {
          return new Promise((res, rej) => {
            const record = { ...kase, contact: contact.key, client: contact.client }
            return casesActions.update(record, res, rej)
          }).then(() => modalActions.hideModal())
        }
      }, { title: 'Attach Contact' })
    }}>
      Attach Contact
    </Cell.Add>
  )
})

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

//-----------  Empty Column  -----------//

const emptyCell = (empty) => ({ emptyText: (
  <Cell.Empty>
    <h4>No Cases Added</h4>
    <h5>Get started with the cases functionality by clicking below.</h5>
    {React.cloneElement(empty, { size: 'large', children: 'Add Your First Case' })}
  </Cell.Empty>
)})

//-----------  Component  -----------//

const CasesTable = ({ empty, records, ...props }) => {

  const columns = [
    Columns.Avatar('id', 'name'),
    nameCol,
    courtCol,
    clientCol(props),
    contactCol(props),
    actionsCol(props),
  ]

  return (
    <RecordsTable columns={columns} locale={emptyCell(empty)} dataSource={records} { ...props } />
  )
}

//-----------  Prop Types  -----------//

CasesTable.propTypes = {
  empty        : PropTypes.node,
  records      : PropTypes.array,
  clients      : PropTypes.object.isRequired,
  contacts     : PropTypes.object.isRequired,
  casesActions : PropTypes.object.isRequired,
  modalActions : PropTypes.object.isRequired,
}

//-----------  Export  -----------//

export default CasesTable
