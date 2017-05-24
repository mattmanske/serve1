//-----------  Imports  -----------//

import Organization         from './styles'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'
import { Icon,
         Menu,
         Button,
         Dropdown }          from 'antd'

import UserAvatar           from 'components/UserAvatar'

//-----------  Definitions  -----------//

const MenuItem    = Menu.Item
const MenuDivider = Menu.Divider

//-----------  Component  -----------//

const OrganizationNav = ({ auth, authActions }) => {

  const userDropdown = (
    <Menu>
      <MenuItem key='user' disabled>
        <h5>{auth.user.displayName}</h5>
        <h6>{auth.user.email}</h6>
      </MenuItem>
      <MenuDivider />
      <MenuItem key='profile'>
        <Link to={'/'}><Icon type='user' /> Edit Profile</Link>
      </MenuItem>
      <MenuItem key='account'>
        <Link to={'/'}><Icon type='setting' /> Account Settings</Link>
      </MenuItem>
      {/* <MenuDivider /> */}
      <MenuItem key='logout'>
        <Link onClick={authActions.signOut}><Icon type='logout' /> Log Out</Link>
      </MenuItem>
    </Menu>
  )

  return (
    <Organization.Nav>
      {auth.isLoggedIn ? (
        <Dropdown overlay={userDropdown} placement='bottomRight'>
          <div>
            {/* <Organization.Username>{auth.user.displayName}</Organization.Username> */}
            <UserAvatar url={auth.user.photoURL} />
          </div>
        </Dropdown>
      ) : (
        <Button icon='login' onClick={authActions.signIn}>Log In</Button>
      )}
    </Organization.Nav>
  )
}

//-----------  Prop Types  -----------//

OrganizationNav.propTypes = {
  auth         : PropTypes.object.isRequired,
  authActions  : PropTypes.object.isRequired,
}

//-----------  Export  -----------//

export default OrganizationNav
