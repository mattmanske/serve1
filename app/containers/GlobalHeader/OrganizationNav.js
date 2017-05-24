//-----------  Imports  -----------//

import Organization         from './styles'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'
import { Button, Popover }  from 'antd'

import UserAvatar           from 'components/UserAvatar'

//-----------  Component  -----------//

const OrganizationNav = ({ auth, authActions }) => {

  const popContent = (
    <a icon='logout' onClick={authActions.signOut}>Log Out</a>
  )

  return (
    <Organization.Nav>
      {auth.isLoggedIn ? (
        <Popover content={popContent} trigger='hover' placement='bottomRight'>
          <Organization.Username>{auth.user.displayName}</Organization.Username>
          <UserAvatar url={auth.user.photoURL} />
        </Popover>
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
