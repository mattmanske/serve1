//-----------  Imports  -----------//

import App                  from './styles'

import isEmpty              from 'lodash/isEmpty'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'
import Helmet               from 'react-helmet'
import { Badge, Button }    from 'antd'

import SvgLogo              from 'components/SvgLogo'
import PageShade            from 'components/PageShade'
import MobileMenu           from 'components/MobileMenu'
import ProgressBar          from 'components/ProgressBar'
import GlobalHeader         from 'components/GlobalHeader'

import ModalWrapper         from 'containers/ModalWrapper'

import vars                 from 'styles/variables'

//-----------  Component  -----------//

class AppWrapper extends React.Component {

  state = {
    progress     : -1,
    loadedRoutes : this.props.location && [this.props.location.pathname],
  }

  componentWillMount(){
    const { router, authActions } = this.props

    this.unsubscribeHistory = router && router.listenBefore((location) => {
      if (this.state.loadedRoutes.indexOf(location.pathname) === -1)
        this.updateProgress(0)
    })

    authActions.sync()
  }

  componentWillUpdate(nextProps, nextState){
    const { loadedRoutes, progress } = this.state
    const { pathname } = nextProps.location

    if (loadedRoutes.indexOf(pathname) === -1 && progress !== -1 && nextState.progress < 100){
      this.updateProgress(100)
      this.setState({ loadedRoutes: loadedRoutes.concat([pathname]) })
    }

    const isWatching  = (!this.props.auth.isWatching && nextProps.auth.isWatching)
    const isLoggedIn  = (!this.props.auth.isLoggedIn && nextProps.auth.isLoggedIn)
    const isLoggedOut = (this.props.auth.isLoggedIn && !nextProps.auth.isLoggedIn)

    if (isWatching || isLoggedOut)
      nextProps.modalActions.showModal('LOGIN_MODAL', {}, { size: 'sm', preventClose: true })
    if (isLoggedIn)
      nextProps.modalActions.hideModal()
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
    const { auth, orders, params, location, browser, children, authActions, modalActions } = this.props
    const { progress } = this.state

    const NNSBlogo  = (<App.Logo><SvgLogo fill='white' width={80} /></App.Logo>)
    const hasOrders = orders.data.paid ? !!orders.data.paid.length : false
    const isMobile  = browser.lessThan.small || false

    return(
      <App.Elem>
        <Helmet
          titleTemplate="%s - NNSB Admin"
          defaultTitle="NNSB Admin"
          meta={[{ name: 'description', content: 'NNSB Admin' }]}
        />

        <ProgressBar percent={progress} updateProgress={this.updateProgress} />

        <GlobalHeader isMobile={isMobile} logo={NNSBlogo}>
          <Link to={'/shows'}>Shows</Link>
          <Link to={'/orders'}>
            Orders
            {hasOrders && <Badge status='processing' />}
          </Link>
          <a disabled>Financials</a>
          <Button icon='logout' onClick={authActions.signOut}>Log Out</Button>
        </GlobalHeader>

        {React.Children.map(children, child => (
          React.cloneElement(child, { params, location })
        ))}

        <ModalWrapper />

        <PageShade active={!auth.isLoggedIn} />
      </App.Elem>
    )
  }
}

//-----------  Prop Types  -----------//

AppWrapper.propTypes = {
  auth         : PropTypes.object.isRequired,
  orders       : PropTypes.object.isRequired,
  browser      : PropTypes.object.isRequired,
  router       : PropTypes.object,
  location     : PropTypes.object,
  children     : PropTypes.node.isRequired,
  authActions  : PropTypes.object.isRequired,
  modalActions : PropTypes.object.isRequired,
}

//-----------  Exports  -----------//

export default AppWrapper
