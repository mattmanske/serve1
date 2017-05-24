//-----------  Imports  -----------//

import Static               from './styles'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'
import { Button }           from 'antd'

import LoadingScreen        from 'components/LoadingScreen'

//-----------  Component  -----------//

const StaticApp = ({ auth, params, location, children, authActions }) => {

  return(
    <Static.App>
      {React.Children.map(children, child => (
        React.cloneElement(child, { params, location })
      ))}

      <LoadingScreen trigger={auth.isWatching} />
    </Static.App>
  )
}

//-----------  Prop Types  -----------//

StaticApp.propTypes = {
  auth        : PropTypes.object.isRequired,
  params      : PropTypes.object,
  location    : PropTypes.object,
  children    : PropTypes.node.isRequired,
  authActions : PropTypes.object.isRequired,
}

//-----------  Exports  -----------//

export default StaticApp
