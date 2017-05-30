//-----------  Imports  -----------//

import Organization         from './styles'

import get                  from 'lodash/get'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'
import { Button }           from 'antd'

import LoadingScreen        from 'components/LoadingScreen'
import DashboardSidebar     from 'components/DashboardSidebar'

import LoginForm            from 'containers/LoginForm'

//-----------  Component  -----------//

class OrganizationApp extends React.Component {

  state = {
    ready   : false,
    message : 'Loading...'
  }

  componentWillMount(){
    this.props.organizationActions.request()
  }

  componentWillUpdate(nextProps, nextState){
    const { auth: { user, isWatching, isLoggedIn }, organization: { data }, authActions } = nextProps
    const { auth, location: { query }, organization } = this.props

    if (this.state.ready) return false

    if (!auth.isWatching && isWatching)
      this.onAuthSync(query.token, !!organization.data.name)

    if (!organization.data.name && data.name)
      this.onOrganizationSync(query.token, auth.isWatching)

    if (auth.isWatching && organization.data.name && query.token)
      this.onFirstUserLogin(query.token, authActions)

    if (isLoggedIn && query.token)
      setTimeout(() => this.setState({ ready: true, message: 'Complete!' }), 250)
  }

  //-----------  Event Handlers  -----------//

  onAuthSync = (token, name) => {
    this.onAuthSync = () => {}
    setTimeout(() => this.setState({
      ready   : (name && !token),
      message : 'Syncing data...'
    }), 250)
  }

  onOrganizationSync = (token, watching) => {
    this.onOrganizationSync = () => {}
    setTimeout(() => this.setState({
      ready   : (watching && !token),
      message : 'Assembling dashboard...'
    }), 250)
  }

  onFirstUserLogin = (token, actions) => {
    this.onFirstUserLogin = () => {}
    setTimeout(() => this.setState({
      message : 'Syncing account...'
    }), 250)
    actions.token(token)
  }

  //-----------  HTML Render  -----------//

  render(){
    const { auth, params, location, children, organization, authActions } = this.props
    const { ready, message } = this.state

    const firstTime = (location.state && location.state.welcome)
    const pathname  = location.pathname || ''

    return(
      <Organization.App>
        {auth.isLoggedIn ? (
          <Organization.Sheet show={ready}>
            <DashboardSidebar pathname={pathname} />
            {React.Children.map(children, child => (
              React.cloneElement(child, { params, location })
            ))}
          </Organization.Sheet>
        ) : (
          <Organization.Login>
            <h2>Login</h2>
            <LoginForm />
          </Organization.Login>
        )}

        {firstTime &&
          <h1>Welcome!</h1>
        }

        <LoadingScreen trigger={ready} message={message} />
      </Organization.App>
    )
  }
}

//-----------  Prop Types  -----------//

OrganizationApp.propTypes = {
  auth                : PropTypes.object.isRequired,
  params              : PropTypes.object,
  location            : PropTypes.object,
  children            : PropTypes.node.isRequired,
  authActions         : PropTypes.object.isRequired,
  organizationActions : PropTypes.object.isRequired,
}

//-----------  Exports  -----------//

export default OrganizationApp
