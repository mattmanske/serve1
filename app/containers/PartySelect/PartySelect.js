//-----------  Imports  -----------//

import flatMap              from 'lodash/flatMap'

import React, { PropTypes } from 'react'
import { Select }           from 'antd'

import RecordOption         from 'components/RecordOption'
import RecordSelector       from 'components/RecordSelector'

//-----------  Definitions  -----------//

const Option = Select.Option

//-----------  Component  -----------//

const PartySelect = ({ value, parties, ...props }) => {

  if (value) props.defaultValue = value

  return (
    <RecordSelector placeholder='Search Parties...' { ...props }>
      {parties && flatMap(parties, (party, key) => (
        <Option key={key} value={key}>
          <RecordOption name={party.name} />
        </Option>
      ))}
    </RecordSelector>
  )
}

//-----------  Prop Types  -----------//

PartySelect.propTypes = {
  value     : PropTypes.string,
  parties   : PropTypes.object.isRequired,
  isLoading : PropTypes.bool.isRequired,
}


//-----------  Export  -----------//

export default PartySelect
