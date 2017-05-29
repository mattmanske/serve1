//-----------  Imports  -----------//

import React, { PropTypes } from 'react'
import { Row, Col }         from 'antd'

//-----------  Component  -----------//

const HorizontalWrapper = ({ span, push, label, children }) => {

  return label ? (
    <Row>
      <Col span={push} className='ant-form-item-label'><label>{label}</label></Col>
      <Col span={span}>{children}</Col>
    </Row>
  ) : (
    <Row>
      <Col span={span} push={push}>{children}</Col>
    </Row>
  )
}

//-----------  Prop Types  -----------//

HorizontalWrapper.propTypes = {
  span     : PropTypes.number,
  push     : PropTypes.number,
  label    : PropTypes.node,
  children : PropTypes.node.isRequired,
}

HorizontalWrapper.defaultProps = {
  span : 18,
  push : 6,
}

//-----------  Export  -----------//

export default HorizontalWrapper
