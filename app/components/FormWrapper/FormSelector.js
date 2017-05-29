//-----------  Imports  -----------//

import Form                 from './styles'

import capitalize           from 'lodash/capitalize'

import React, { PropTypes } from 'react'

import HorizontalWrapper    from 'components/HorizontalWrapper'

//-----------  Component  -----------//

const FormSelector = ({ type, selector: Select, horizontal, ...props }) => {

  return horizontal ? (
    <HorizontalWrapper label={capitalize(type)}>
      <Select { ...props } />
      <Form.Small>or</Form.Small>
    </HorizontalWrapper>
  ) : (
    <Select { ...props } />
  )
}

//-----------  Prop Types  -----------//

FormSelector.propTypes = {
  type        : PropTypes.string,
  value       : PropTypes.string,
  selector    : PropTypes.func,
  horizontal  : PropTypes.bool,
  isLoading   : PropTypes.bool.isRequired,
  afterSelect : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default FormSelector
