//-----------  Imports  -----------//

import Block                from './styles'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

const MaterialIcon = (props) => {

  return (
    <Block.Elem onClick={props.onClick}>
      {props.icon}
    </Block.Elem>
  )
}

//-----------  Prop Types  -----------//

MaterialIcon.propTypes = {
  icon    : PropTypes.string.isRequired,
  onClick : PropTypes.func,
}

//-----------  Export  -----------//

export default MaterialIcon
