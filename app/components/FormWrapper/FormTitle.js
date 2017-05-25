//-----------  Imports  -----------//

import Form                 from './styles'

import React, { PropTypes } from 'react'

import HorizontalWrapper    from 'components/HorizontalWrapper'

//-----------  Component  -----------//

const FormTitle = ({ title, horizontal }) => {

  return horizontal ? (
    <HorizontalWrapper>
      <Form.Title horizontal={horizontal}>{title}</Form.Title>
    </HorizontalWrapper>
  ) : (
    <Form.Title horizontal={horizontal}>{title}</Form.Title>
  )
}

//-----------  Prop Types  -----------//

FormTitle.propTypes = {
  title      : PropTypes.node,
  horizontal : PropTypes.bool,
}

//-----------  Export  -----------//

export default FormTitle
