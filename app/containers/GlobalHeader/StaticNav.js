//-----------  Imports  -----------//

import Static               from './styles'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'
import { Button, Popover }  from 'antd'

//-----------  Component  -----------//

const StaticNav = ({ auth, authActions }) => {

  return (
    <Static.Nav>
      {auth.isLoggedIn &&
        <a icon='logout' onClick={authActions.signOut}>Log Out</a>
      }
      <Link to='/register'><Button icon='login'>Get Started</Button></Link>
    </Static.Nav>
  )
}

//-----------  Prop Types  -----------//

StaticNav.propTypes = {
  auth         : PropTypes.object.isRequired,
  authActions  : PropTypes.object.isRequired,
}

//-----------  Export  -----------//

export default StaticNav
