//-----------  Imports  -----------//

import Block                from './styles'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'
import Helmet               from 'react-helmet'

import Button               from 'components/Button'
import MobileMenu           from 'components/MobileMenu'
import ProgressBar          from 'components/ProgressBar'
import GlobalHeader         from 'components/GlobalHeader'

import ModalWrapper         from 'containers/ModalWrapper'

//-----------  Component  -----------//

class AppWrapper extends React.Component {

  state = {
    progress     : -1,
    loadedRoutes : this.props.location && [this.props.location.pathname],
  }

  componentWillMount(){
    this.unsubscribeHistory = this.props.router && this.props.router.listenBefore((location) => {
      if (this.state.loadedRoutes.indexOf(location.pathname) === -1)
        this.updateProgress(0)
    })
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
    const { params, location, browser, children, modalActions } = this.props
    const { progress } = this.state

    const isMobile = browser.lessThan.small || false

    return(
      <Block.Elem>
        <Helmet
          titleTemplate="%s - mmReduxBaseplate"
          defaultTitle="mmReduxBaseplate"
          meta={[{ name: 'description', content: 'A React/Redux Project Baseplate' }]}
        />

        <ProgressBar percent={progress} updateProgress={this.updateProgress} />

        <GlobalHeader isMobile={isMobile}>
          <Link to={'/about'}>About Us</Link>
          <a>Heres a Link</a>
          <a>Another Link</a>
          <Button size='sm' onClick={() => modalActions.showModal('DEMO_FORM', {}, { size: 'sm' })}>
            Modal
          </Button>
        </GlobalHeader>

        {React.Children.map(children, child => (
          React.cloneElement(child, { params, location })
        ))}

        <ModalWrapper />
      </Block.Elem>
    )
  }
}

//-----------  Prop Types  -----------//

AppWrapper.propTypes = {
  browser      : PropTypes.object.isRequired,
  router       : PropTypes.object,
  location     : PropTypes.object,
  children     : PropTypes.node.isRequired,
  modalActions : PropTypes.object.isRequired,
}

//-----------  Exports  -----------//

export default AppWrapper
