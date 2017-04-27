//-----------  Imports  -----------//

import Block                from './styles'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

class PopupTooltip extends React.Component {

  state = {
    active: false,
  }

  //-----------  Event Handlers  -----------//

  handleClick = () => {
    this.setState({ active: true })
  }

  handeMouseLeave = () => {
    this.change = setTimeout(() => this.setState({ active: false }), 250)
  }

  handeMouseEnter = () => {
    window.clearTimeout(this.change)
  }

  //-----------  HTML Render  -----------//

  render(){
    const { props, state } = this

    return (
      <Block.Elem onClick={this.handleClick} onMouseLeave={this.handeMouseLeave}>
        <Block.Popup { ...state } onMouseLeave={this.handeMouseLeave} onMouseOver={this.handeMouseEnter}>
          {props.children}
        </Block.Popup>
      </Block.Elem>
    )
  }
}

//-----------  Prop Types  -----------//

PopupTooltip.propTypes = {
  children: PropTypes.node.isRequired,
}

PopupTooltip.defaultProps = {
}

//-----------  Export  -----------//

export default PopupTooltip
