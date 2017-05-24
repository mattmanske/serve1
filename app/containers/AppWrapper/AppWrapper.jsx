//-----------  Imports  -----------//

import App                  from './styles'

import isEmpty              from 'lodash/isEmpty'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'
import Helmet               from 'react-helmet'
import { Button, Popover }  from 'antd'

import PageShade            from 'components/PageShade'
import UserAvatar           from 'components/UserAvatar'
import MobileMenu           from 'components/MobileMenu'
import ProgressBar          from 'components/ProgressBar'
import GlobalHeader         from 'components/GlobalHeader'
import LoadingScreen        from 'components/LoadingScreen'

import ModalWrapper         from 'containers/ModalWrapper'

//-----------  Component  -----------//

class AppWrapper extends React.Component {

  state = {
    progress     : -1,
    loadedRoutes : this.props.location && [this.props.location.pathname],
  }

  componentWillMount(){
    const { org, router, authActions, organizationActions } = this.props

    this.unsubscribeHistory = router && router.listenBefore((location) => {
      if (this.state.loadedRoutes.indexOf(location.pathname) === -1)
        this.updateProgress(0)
    })

    if (org) organizationActions.request(org)
    authActions.sync()
  }

  componentWillUpdate(nextProps, nextState){
    const { loadedRoutes, progress } = this.state
    const { pathname } = nextProps.location

    if (loadedRoutes.indexOf(pathname) === -1 && progress !== -1 && nextState.progress < 100){
      this.updateProgress(100)
      this.setState({ loadedRoutes: loadedRoutes.concat([pathname]) })
    }
  }

  componentWillUnmount(){
    this.unsubscribeHistory = undefined
  }

  //-----------  Event Handlers  -----------//

  updateProgress = (progress) => {
    this.setState({ progress })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { org, site, auth, params, location, browser, children, organization, authActions } = this.props
    const { progress } = this.state

    const isMobile = browser.lessThan.small || false
    const trigger  = org ? (!!organization.data && auth.isWatching) : auth.isWatching

    return(
      <App.Wrapper>
        <Helmet
          defaultTitle="Serve1"
          titleTemplate="%s - Serve1"
          meta={[{ name: 'description', content: 'Process Serving Made Easy' }]}
        />

        <ProgressBar percent={progress} updateProgress={this.updateProgress} />

        {org ? (
          <GlobalHeader organization={organization.name} isMobile={isMobile}>
            {auth.isLoggedIn ? (
              <Popover content={<a icon='logout' onClick={authActions.signOut}>Log Out</a>} trigger='hover' placement='bottomRight'>
                <UserAvatar url={auth.user.photoURL} />
              </Popover>
            ) : (
              <Button icon='login' onClick={authActions.signIn}>Log In</Button>
            )}
          </GlobalHeader>
        ) : (
          <GlobalHeader isMobile={isMobile}>
            {auth.isLoggedIn &&
              <a icon='logout' onClick={authActions.signOut}>Log Out</a>
            }
            <Link to='/register'><Button icon='login'>Get Started</Button></Link>
          </GlobalHeader>
        )}

        {React.Children.map(children, child => (
          React.cloneElement(child, { params, location })
        ))}

        <ModalWrapper />

        <LoadingScreen trigger={trigger} />
      </App.Wrapper>
    )
  }
}

//-----------  Prop Types  -----------//

AppWrapper.propTypes = {
  org                 : PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  auth                : PropTypes.object.isRequired,
  browser             : PropTypes.object.isRequired,
  router              : PropTypes.object,
  location            : PropTypes.object,
  children            : PropTypes.node.isRequired,
  authActions         : PropTypes.object.isRequired,
  organizationActions : PropTypes.object.isRequired,
}

//-----------  Exports  -----------//

export default AppWrapper
