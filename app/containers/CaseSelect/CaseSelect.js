//-----------  Imports  -----------//

import flatMap              from 'lodash/flatMap'

import React, { PropTypes } from 'react'
import { Select }           from 'antd'

import RecordOption         from 'components/RecordOption'
import RecordSelector       from 'components/RecordSelector'

//-----------  Definitions  -----------//

const Option = Select.Option

//-----------  Component  -----------//

const CaseSelect = ({ value, cases, ...props }) => {

  if (value) props.defaultValue = value

  return (
    <RecordSelector placeholder='Search Cases...' { ...props }>
      {cases && flatMap(cases, (kase, key) => (
        <Option key={key} value={key}>
          <RecordOption id={kase.id} name={`${kase.plantiff} vs ${kase.defendant}`} />
        </Option>
      ))}
    </RecordSelector>
  )
}

//-----------  Prop Types  -----------//

CaseSelect.propTypes = {
  value     : PropTypes.string,
  cases     : PropTypes.object.isRequired,
  isLoading : PropTypes.bool.isRequired,
}


//-----------  Export  -----------//

export default CaseSelect
