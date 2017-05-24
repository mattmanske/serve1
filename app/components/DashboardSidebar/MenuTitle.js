//-----------  Imports  -----------//

import Menu                 from './styles'

import React, { PropTypes } from 'react'
import { Icon }             from 'antd'

//-----------  Component  -----------//

const MenuTitle = ({ to, icon, title }) => {

  return(
    <Menu.Title to={to || ''}>
      {icon && <Icon type={icon} />}
      {title}
    </Menu.Title>
  )
}

//-----------  Prop Types  -----------//

MenuTitle.propTypes = {
  to    : PropTypes.string,
  icon  : PropTypes.string,
  title : PropTypes.node.isRequired,
}

//-----------  Export  -----------//

export default MenuTitle
