//-----------  Imports  -----------//

import flatMap              from 'lodash/flatMap'

import React, { PropTypes } from 'react'
import { Select }           from 'antd'

import RecordOption         from 'components/RecordOption'
import RecordSelector       from 'components/RecordSelector'

//-----------  Definitions  -----------//

const Option = Select.Option

//-----------  Component  -----------//

const ClientSelect = ({ value, clients, ...props }) => {

  if (value) props.defaultValue = value

  return (
    <RecordSelector placeholder='Search Clients...' { ...props }>
      {clients && flatMap(clients, (client, id) => (
        <Option key={id} value={id}>
          <RecordOption id={id} name={client.name} />
        </Option>
      ))}
    </RecordSelector>
  )
}

//-----------  Prop Types  -----------//

ClientSelect.propTypes = {
  value     : PropTypes.string,
  clients   : PropTypes.object.isRequired,
  onSelect  : PropTypes.func.isRequired,
  isLoading : PropTypes.bool.isRequired,
}

//-----------  Export  -----------//

export default ClientSelect
