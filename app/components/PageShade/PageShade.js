//-----------  Imports  -----------//

import Block                from './styles'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

const PageShade = (props) => {

  return (
    <Block.Elem style={props.style} onClick={props.onClick} { ...props } />
  )
}

//-----------  Prop Types  -----------//

PageShade.propTypes = {
  active  : PropTypes.bool,
  onClick : PropTypes.func
}

PageShade.defaultProps = {
  active : false
}

//-----------  Export  -----------//

export default PageShade
