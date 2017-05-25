//-----------  Imports  -----------//

import React, { PropTypes } from 'react'

import flatMap              from 'lodash/flatMap'

import RecordOption         from 'components/RecordOption'
import RecordSelector       from 'components/RecordSelector'

//-----------  Component  -----------//

const CaseSelect = ({ cases, ...props }) => {

  const options = flatMap(cases, (kase, id) => ({
    value : id,
    label : <RecordOption id={id} name={kase.name} />
  }))

  return (
    <RecordSelector options={options} placeholder='Search Cases...' { ...props } />
  )
}

//-----------  Prop Types  -----------//

CaseSelect.propTypes = {
  value     : PropTypes.string,
  cases     : PropTypes.object.isRequired,
  onChange  : PropTypes.func.isRequired,
  isLoading : PropTypes.bool.isRequired,
}


//-----------  Export  -----------//

export default CaseSelect
