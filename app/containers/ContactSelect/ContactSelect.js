//-----------  Imports  -----------//

import React, { PropTypes } from 'react'

import flatMap              from 'lodash/flatMap'

import RecordOption         from 'components/RecordOption'
import RecordSelector       from 'components/RecordSelector'

//-----------  Component  -----------//

const ContactSelect = ({ filter, contacts, ...props }) => {

  const options = flatMap(contacts, (contact, id) => ({
    value    : id,
    label    : <RecordOption name={`${contact.first_name} ${contact.last_name}`} />,
    clientID : filter
  }))

  return (
    <RecordSelector options={options} placeholder='Search Contacts...' { ...props } />
  )
}

//-----------  Prop Types  -----------//

ContactSelect.propTypes = {
  filter    : PropTypes.string,
  value     : PropTypes.string,
  contacts  : PropTypes.object.isRequired,
  onChange  : PropTypes.func.isRequired,
  isLoading : PropTypes.bool.isRequired,
}

//-----------  Export  -----------//

export default ContactSelect
