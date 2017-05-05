//-----------  Imports  -----------//

import Submit               from './styles'

import $                    from 'jquery'

import React, { PropTypes } from 'react'
import { Button }           from 'antd'

//-----------  Helpers  -----------//

function findState({ submitting, submitSucceeded, submitFailed }){
  if (submitting){ return 'loading' }
  if (submitFailed){ return 'error' }
  if (submitSucceeded){ return 'success' }
  return null
}

function highlightError(target){
  setTimeout(() => {
    $(target).closest('form').find('.has-error:first').find('input, select, textarea').focus()
  }, 1)
}

//-----------  Component  -----------//

class ReduxAntdSubmit extends React.Component {

  state = { btnState: null }

  shouldComponentUpdate(nextProps, nextState){
    const isDirty     = (this.props.pristine != nextProps.pristine)
    const isDifferent = (this.state.btnState != nextState.btnState)
    const isSucceeded = (this.props.submitSucceeded != nextProps.submitSucceeded)
    const canChange   = (this.props.canReset) ? true : ('success' != this.state.btnState)
    const textChange  = (this.props.text != nextProps.text)
    const childChange = (this.props.children != nextProps.children)

    return (isDirty || isSucceeded || (isDifferent && canChange) || textChange || childChange)
  }

  componentWillReceiveProps(nextProps){
    const propsChange = (this.props.submitting != nextProps.submitting)
                        || (this.props.submitFailed != nextProps.submitFailed)
                        || (this.props.submitSucceeded != nextProps.submitSucceeded)

    if (propsChange){
      const nextState = findState(nextProps)
      clearTimeout(this.canReset)

      if ('error' == nextState)
        this.setState({ btnState: nextState }, this.canResetState)
      else if ('loading' == this.state.btnState && 'success' == nextState)
        this.canReset = setTimeout(() => this.setState({ btnState: nextState }), 750)
      else if ('success' == this.state.btnState && this.props.canReset)
        this.canReset = setTimeout(() => this.setState({ btnState: null }), 2000)
      else
        this.setState({ btnState: nextState })
    }
  }

  componentWillUnmount(){
    clearTimeout(this.canReset)
  }

  //-----------  Helpers  -----------//

  canResetState = () => {
    this.canReset = setTimeout(() => this.setState({ btnState: null }), 1200)
  }

  //-----------  Event Handlers  -----------//

  onReset = (evt) => {
    this.props.reset()
  }

  onSubmit = (evt) => {
    if (!this.props.pristineSubmit && this.props.pristine)
      return evt.preventDefault()
    if (this.props.submitFailed)
      this.setState({ btnState: 'error' }, this.canResetState)
    highlightError(evt.target)
  }

  //-----------  HTML Render  -----------//

  render(){
    const { props, state } = this

    const btnType    = ('error' == state.btnState) ? 'danger' : 'primary'
    const isLoading  = ('loading' == state.btnState)
    const isDisabled = ((!props.canReset && props.submitSucceeded) || (!props.pristineSubmit && props.pristine))

    const text = props.children || props.text || 'Submit'

    return(
      <Submit.Wrapper>
        <Submit.Column span={18} push={6}>
          {props.other && props.other}
          <Button type='submit' htmlType='submit' type={btnType} onClick={this.onSubmit} loading={isLoading} disabled={isDisabled}>
            {text}
          </Button>
        </Submit.Column>
      </Submit.Wrapper>
    )
  }
}

//-----------  Prop Types  -----------//

ReduxAntdSubmit.propTypes = {
  icon            : PropTypes.string,
  text            : PropTypes.string,
  size            : PropTypes.oneOf(['small', 'large']),
  reset           : PropTypes.func.isRequired,
  other           : PropTypes.element,
  pristine        : PropTypes.bool.isRequired,
  submitSucceeded : PropTypes.bool.isRequired,
  canReset        : PropTypes.bool,
  pristineSubmit  : PropTypes.bool,
  children        : PropTypes.node,
  submitting      : PropTypes.bool.isRequired,
  submitFailed    : PropTypes.bool.isRequired,
  submitSucceeded : PropTypes.bool,
}

ReduxAntdSubmit.defaultProps = {
  canReset       : true,
  pristineSubmit : false,
}

//-----------  Export  -----------//

export default ReduxAntdSubmit
