//-----------  Imports  -----------//

import flatMap              from 'lodash/flatMap'

import React, { PropTypes } from 'react'
import { Select }           from 'antd'

import RecordOption         from 'components/RecordOption'
import RecordSelector       from 'components/RecordSelector'

//-----------  Definitions  -----------//

const Option = Select.Option

//-----------  Component  -----------//

const JobSelect = ({ jobs, value, ...props }) => {

  if (value) props.defaultValue = value

  return (
    <RecordSelector placeholder='Search Jobs...' { ...props }>
      {clients && flatMap(jobd, (job, id) => (
        <Option key={id} value={id}>
          <RecordOption name={id} />
        </Option>
      ))}
    </RecordSelector>
  )
}

//-----------  Prop Types  -----------//

JobSelect.propTypes = {
  jobs      : PropTypes.object.isRequired,
  value     : PropTypes.string,
  onChange  : PropTypes.func.isRequired,
  isLoading : PropTypes.bool.isRequired,
}


//-----------  Export  -----------//

export default JobSelect
