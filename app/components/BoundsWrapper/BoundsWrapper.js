//-----------  Imports  -----------//

import Block                from './styles'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

const BoundsWrapper = (props) => (
  <Block.Elem { ...props }>
    {props.children}
  </Block.Elem>
)

//-----------  Prop Types  -----------//

BoundsWrapper.propTypes = {
  type     : PropTypes.oneOf(['block', 'compact', 'small']),
  children : PropTypes.node.isRequired
}

//-----------  Export  -----------//

export default BoundsWrapper
