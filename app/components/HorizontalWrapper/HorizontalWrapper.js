//-----------  Imports  -----------//

import React, { PropTypes } from 'react'
import { Row, Col }         from 'antd'

//-----------  Component  -----------//

const HorizontalWrapper = ({ span, push, children }) => {

  return (
    <Row>
      <Col span={span} push={push}>
        {children}
      </Col>
    </Row>
  )
}

//-----------  Prop Types  -----------//

HorizontalWrapper.propTypes = {
  span     : PropTypes.number,
  push     : PropTypes.number,
  children : PropTypes.node.isRequired,
}

HorizontalWrapper.defaultProps = {
  span : 18,
  push : 6,
}

//-----------  Export  -----------//

export default HorizontalWrapper
