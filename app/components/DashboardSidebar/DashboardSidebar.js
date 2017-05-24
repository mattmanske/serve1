//-----------  Imports  -----------//

import Dashboard            from './styles'

import MenuTitle            from './MenuTitle'

import React, { PropTypes } from 'react'
import { Menu, Icon }       from 'antd'

//-----------  Definitions  -----------//

const SubMenu  = Menu.SubMenu
const MenuItem = Menu.Item

//-----------  Component  -----------//

class DashboardSidebar extends React.Component {

  state = {
    current: 'dashboard'
  }

  //-----------  Event Handlers  -----------//

  handleClick = (e) => {
    this.setState({ current: e.key })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { current } = this.state



    return (
      <Dashboard.Sidebar>
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode='inline'>
          <MenuItem key='dashboard'>
            <MenuTitle to={'/'} icon='home' title='Dashboard' />
          </MenuItem>
          <SubMenu key='jobs&cases' title={<MenuTitle icon='copy' title='Jobs & Cases' />}>
            <MenuItem key='jobs' disabled><MenuTitle to={'/jobs'} title='Jobs' /></MenuItem>
            <MenuItem key='cases'><MenuTitle to={'/cases'} title='Cases' /></MenuItem>
            <MenuItem key='services' disabled><MenuTitle to={'/services'} title='Services' /></MenuItem>
          </SubMenu>
          <SubMenu key='documents' title={<MenuTitle icon='paper-clip' title='Documents' />} disabled>
            <MenuItem key='5'>Option 5</MenuItem>
            <MenuItem key='6'>Option 6</MenuItem>
            <SubMenu key='sub3' title='Submenu'>
              <MenuItem key='7'>Option 7</MenuItem>
              <MenuItem key='8'>Option 8</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu key='logs' title={<MenuTitle icon='bars' title='Activity logs' />} disabled>
            <MenuItem key='9'>Option 9</MenuItem>
            <MenuItem key='10'>Option 10</MenuItem>
            <MenuItem key='11'>Option 11</MenuItem>
            <MenuItem key='12'>Option 12</MenuItem>
          </SubMenu>
          <SubMenu key='contacts' title={<MenuTitle icon='contacts' title='Contacts' />} disabled>
            <MenuItem key='13'>Option 9</MenuItem>
            <MenuItem key='14'>Option 10</MenuItem>
            <MenuItem key='15'>Option 11</MenuItem>
            <MenuItem key='16'>Option 12</MenuItem>
          </SubMenu>
          <SubMenu key='settings' title={<MenuTitle icon='setting' title='Settings' />} disabled>
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

DashboardSidebar.propTypes = {}

//-----------  Export  -----------//

export default DashboardSidebar
