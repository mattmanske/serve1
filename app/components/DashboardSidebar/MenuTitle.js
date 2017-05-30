//-----------  Imports  -----------//

import Menu                 from './styles'

import React, { PropTypes } from 'react'
import { Icon }             from 'antd'

//-----------  Component  -----------//

const MenuTitle = ({ to, icon, title, disabled }) => {

  return(
    <Menu.Title to={to || ''} disabled={disabled}>
      {icon && <Icon type={icon} />}
      {title}
    </Menu.Title>
  )
}

//-----------  Prop Types  -----------//

MenuTitle.propTypes = {
  to       : PropTypes.string,
  icon     : PropTypes.string,
  title    : PropTypes.node.isRequired,
  disabled : PropTypes.bool,
}

//-----------  Export  -----------//

export default MenuTitle
