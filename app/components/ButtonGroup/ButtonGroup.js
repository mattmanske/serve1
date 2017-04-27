//-----------  Imports  -----------//

import Block                from './styles'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

const ButtonGroup = (props) => {

  return (
    <Block.Elem>
      {props.children}
    </Block.Elem>
  )
}

//-----------  Prop Types  -----------//

ButtonGroup.propTypes = {
  children : PropTypes.node.isRequired
}

//-----------  Export  -----------//

export default ButtonGroup
