//-----------  Imports  -----------//

import Form                 from './styles'

import React, { PropTypes } from 'react'

import HorizontalWrapper    from 'components/HorizontalWrapper'

//-----------  Component  -----------//

const FormSelector = ({ selector: Select, horizontal, ...props }) => {

  return horizontal ? (
    <HorizontalWrapper>
      <Select { ...props } />
      <Form.Small>or</Form.Small>
    </HorizontalWrapper>
  ) : (
    <Select { ...props } />
  )
}

//-----------  Prop Types  -----------//

FormSelector.propTypes = {
  value       : PropTypes.string,
  selector    : PropTypes.func,
  horizontal  : PropTypes.bool,
  isLoading   : PropTypes.bool.isRequired,
  afterSelect : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default FormSelector
