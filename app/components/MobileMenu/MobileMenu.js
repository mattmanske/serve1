//-----------  Imports  -----------//

import Block                from './styles'

import React, { PropTypes } from 'react'

import PageShade            from 'components/PageShade'
import MaterialIcon         from 'components/MaterialIcon'

//-----------  Component  -----------//

class MobileMenu extends React.Component {

  state = { active: false }

  //-----------  Event Handlers  -----------//

  toggleOpen = () => {
    this.setState({ active: !this.state.active })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { active }   = this.state
    const { children } = this.props

    return (
      <Block.Elem onClick={this.toggleOpen}>
        <PageShade active={active} onClick={this.toggleOpen} />

        <Block.Menu active={active}>
          <nav>{children}</nav>
        </Block.Menu>

        <Block.Trigger active={active}>
          <MaterialIcon icon='menu' />
        </Block.Trigger>
      </Block.Elem>
    )
  }
}

//-----------  Prop Types  -----------//

MobileMenu.propTypes = {
  children : PropTypes.node.isRequired
}

//-----------  Export  -----------//

export default MobileMenu
