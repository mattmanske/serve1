//-----------  Imports  -----------//

import includes             from 'lodash/includes'

import Dashboard            from './styles'

import MenuTitle            from './MenuTitle'

import React, { PropTypes } from 'react'
import { Menu, Icon }       from 'antd'

//-----------  Definitions  -----------//

const SubMenu  = Menu.SubMenu
const MenuItem = Menu.Item
const Divider  = Menu.Divider

//-----------  Helpers  -----------//

function getOpenKey(pathname){
  const paths = pathname.split('/')

  // if (includes(paths, 'jobs'))  return '1'
  // if (includes(paths, 'cases')) return '1'
}

function getSelectedKey(pathname){
  const paths = pathname.split('/')

  if (includes(paths, 'jobs'))         return 'jobs'
  if (includes(paths, 'cases'))        return 'cases'
  if (includes(paths, 'clients'))      return 'clients'
  if (includes(paths, 'contacts'))     return 'contacts'
  if (includes(paths, 'organization')) return 'organization'
  return 'dashboard'
}

//-----------  Component  -----------//

class DashboardSidebar extends React.Component {

  state = {
    open     : getOpenKey(this.props.pathname),
    selected : getSelectedKey(this.props.pathname)
  }

  componentWillUpdate(nextProps){
    if (this.props.pathname != nextProps.pathname){
      this.setState({
        open     : getOpenKey(nextProps.pathname),
        selected : getSelectedKey(nextProps.pathname)
      })
    }
  }

  //-----------  Event Handlers  -----------//

  handleMenuClick = ({ key }) => {
    const { open } = this.state

    this.setState({
      open: (!open && (key != open)) ? key : null
    })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { open, selected } = this.state

    return (
      <Dashboard.Sidebar>
        <Menu
          mode='inline'
          openKeys={[open]}
          selectedKeys={[selected]}
        >
          <MenuItem key='dashboard'>
            <MenuTitle to={'/'} icon='home' title='Dashboard' />
          </MenuItem>

          {/* <Divider /> */}

          <MenuItem key='jobs'>
            <MenuTitle to={'/jobs'} icon='copy' title='Jobs' />
          </MenuItem>

          <MenuItem key='cases'>
            <MenuTitle to={'/cases'} icon='book' title='Cases' />
          </MenuItem>

          <MenuItem key='clients'>
            <MenuTitle to={'/clients'} icon='contacts' title='Clients' />
          </MenuItem>

          <MenuItem key='contacts'>
            <MenuTitle to={'/contacts'} icon='usergroup-add' title='Contacts' />
          </MenuItem>

          {/* <Divider /> */}

          <SubMenu key='2' title={<MenuTitle icon='paper-clip' title='Documents' disabled />}>
            <MenuItem key='5'>Option 5</MenuItem>
            <MenuItem key='6'>Option 6</MenuItem>
            <SubMenu key='sub3' title='Submenu'>
              <MenuItem key='7'>Option 7</MenuItem>
              <MenuItem key='8'>Option 8</MenuItem>
            </SubMenu>
          </SubMenu>

          <SubMenu key='3' title={<MenuTitle icon='bars' title='Activity logs' disabled />}>
            <MenuItem key='9'>Option 9</MenuItem>
            <MenuItem key='10'>Option 10</MenuItem>
            <MenuItem key='11'>Option 11</MenuItem>
            <MenuItem key='12'>Option 12</MenuItem>
          </SubMenu>

          <MenuItem key='organization'>
            <MenuTitle to={'/organization'} icon='setting' title='Organization' />
          </MenuItem>

          <SubMenu key='settings' title={<MenuTitle icon='setting' title='Organization' disabled />}>
            <MenuItem key='17'>Option 9</MenuItem>
            <MenuItem key='18'>Option 10</MenuItem>
            <MenuItem key='19'>Option 11</MenuItem>
          </SubMenu>
        </Menu>
      </Dashboard.Sidebar>
    )
  }
}

//-----------  Prop Types  -----------//

DashboardSidebar.propTypes = {
  pathname: PropTypes.string.isRequired
}

//-----------  Export  -----------//

export default DashboardSidebar
