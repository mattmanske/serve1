//-----------  Imports  -----------//

import App                  from './styles'

import isEmpty              from 'lodash/isEmpty'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'
import Helmet               from 'react-helmet'
import { Button }           from 'antd'

import PageShade            from 'components/PageShade'
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
    const { site, router, authActions } = this.props

    this.unsubscribeHistory = router && router.listenBefore((location) => {
      if (this.state.loadedRoutes.indexOf(location.pathname) === -1)
        this.updateProgress(0)
    })

    authActions.sync()
    // if (site) organizationActions.sync()
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
    const { org, site, auth, params, location, browser, children, authActions } = this.props
    const { progress } = this.state

    const isMobile = browser.lessThan.small || false

    return(
      <App.Wrapper>
        <Helmet
          defaultTitle="Serve1"
          titleTemplate="%s - Serve1"
          meta={[{ name: 'description', content: 'Process Serving Made Easy' }]}
        />

        <ProgressBar percent={progress} updateProgress={this.updateProgress} />

        <GlobalHeader org={org} isMobile={isMobile}>
          {auth.isLoggedIn &&
            <a icon='logout' onClick={authActions.signOut}>Log Out</a>
          }

          {!org &&
            <Link to='/register'><Button icon='login'>Get Started</Button></Link>
          }
        </GlobalHeader>

        {React.Children.map(children, child => (
          React.cloneElement(child, { params, location })
        ))}

        <ModalWrapper />

        <LoadingScreen trigger={auth.isWatching} />
      </App.Wrapper>
    )
  }
}

//-----------  Prop Types  -----------//

AppWrapper.propTypes = {
  org         : PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  auth        : PropTypes.object.isRequired,
  browser     : PropTypes.object.isRequired,
  router      : PropTypes.object,
  location    : PropTypes.object,
  children    : PropTypes.node.isRequired,
  authActions : PropTypes.object.isRequired,
}

//-----------  Exports  -----------//

export default AppWrapper
