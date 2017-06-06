//-----------  Imports  -----------//

import flatMap              from 'lodash/flatMap'

import React, { PropTypes } from 'react'
import { Select }           from 'antd'

import RecordOption         from 'components/RecordOption'
import RecordSelector       from 'components/RecordSelector'

//-----------  Definitions  -----------//

const Option = Select.Option

//-----------  Component  -----------//

const ContactSelect = ({ value, filter, contacts, ...props }) => {

  if (value) props.defaultValue = value

  return (
    <RecordSelector placeholder='Search Contacts...' { ...props }>
      {contacts && flatMap(contacts, (contact, id) => (
        <Option key={id} value={id} clientID={filter}>
          <RecordOption name={`${contact.first_name} ${contact.last_name}`} />
        </Option>
      ))}
    </RecordSelector>
  )
}

//-----------  Prop Types  -----------//

ContactSelect.propTypes = {
  value     : PropTypes.string,
  filter    : PropTypes.string,
  contacts  : PropTypes.object.isRequired,
  isLoading : PropTypes.bool.isRequired,
}

//-----------  Export  -----------//

export default ContactSelect
