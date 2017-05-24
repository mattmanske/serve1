//-----------  Imports  -----------//

import Loading              from './styles'

import React, { PropTypes } from 'react'

import SvgLogo              from 'components/SvgLogo'

//-----------  Component  -----------//

class LoadingScreen extends React.Component {

  state = {
    timeTrigger  : false,
    propsTrigger : this.props.trigger,
  }

  componentWillMount(){
    setTimeout(() => this.setState({ timeTrigger: true }), 1500)
  }

  componentWillReceiveProps(nextProps){
    this.setState({ propsTrigger: nextProps.trigger })
  }

  render(){
    const { timeTrigger, propsTrigger } = this.state
    const { message } = this.props
    
    const visible = !timeTrigger || !propsTrigger

    return (
      <Loading.Screen visible={visible}>
        <Loading.Center>
          <Loading.Spinner>
            {[0,1,3,2].map(index => <Loading.Cube key={index} index={index} />)}
          </Loading.Spinner>
          <SvgLogo width={80} fill='black' />
          {message && <Loading.Message>{message}</Loading.Message>}
        </Loading.Center>
      </Loading.Screen>
    )
  }
}

//-----------  Prop Types  -----------//

LoadingScreen.propTypes = {
  trigger: PropTypes.bool,
  message: PropTypes.string,
}

LoadingScreen.defaultProps = {
  trigger: false
}

//-----------  Export  -----------//

export default LoadingScreen
