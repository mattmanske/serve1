//-----------  Imports  -----------//

import React, { PropTypes } from 'react'

import flatMap              from 'lodash/flatMap'

import RecordOption         from 'components/RecordOption'
import RecordSelector       from 'components/RecordSelector'

//-----------  Component  -----------//

const ClientSelect = ({ clients, ...props }) => {

  const options = flatMap(clients, (client, id) => ({
    value : id,
    label : <RecordOption id={id} name={client.name} />
  }))

  return (
    <RecordSelector options={options} placeholder='Search Clients...' { ...props } />
  )
}

//-----------  Prop Types  -----------//

ClientSelect.propTypes = {
  value     : PropTypes.string,
  clients   : PropTypes.object.isRequired,
  onChange  : PropTypes.func.isRequired,
  isLoading : PropTypes.bool.isRequired,
}

//-----------  Export  -----------//

export default ClientSelect
