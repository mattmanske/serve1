//-----------  Imports  -----------//

import React, { PropTypes } from 'react'

import flatMap              from 'lodash/flatMap'

import RecordOption         from 'components/RecordOption'
import RecordSelector       from 'components/RecordSelector'

//-----------  Component  -----------//

const JobSelect = ({ jobs, ...props }) => {

  const options = flatMap(jobs, (job, id) => ({
    value : id,
    label : <RecordOption id={id} name={job.name} />
  }))

  return (
    <RecordSelector options={options} placeholder='Search Jobs...' { ...props } />
  )
}

//-----------  Prop Types  -----------//

JobSelect.propTypes = {
  value     : PropTypes.string,
  jobs     : PropTypes.object.isRequired,
  onChange  : PropTypes.func.isRequired,
  isLoading : PropTypes.bool.isRequired,
}


//-----------  Export  -----------//

export default JobSelect
