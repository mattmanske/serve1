//-----------  Imports  -----------//

import Modal                from './styles'

import get                  from 'lodash/get'

import React, { PropTypes } from 'react'

import LoginForm            from 'containers/LoginForm'
import ContactForm          from 'containers/ContactForm'

//-----------  Definitions  -----------//

const delay = 150

const MODAL_COMPONENTS = {
  LOGIN_FORM   : LoginForm,
  CONTACT_FORM : ContactForm
}

//-----------  Helpers  -----------//

function getModal(child){
  return MODAL_COMPONENTS[child] || null
}

//-----------  Component  -----------//

class ModalWrapper extends React.Component {

  state = {
    open  : !!getModal(this.props.child),
    child : getModal(this.props.child),
    props : get(this.props, 'props', {}),
  }

  shouldComponentUpdate(nextProps, nextState){
    const diffPropsChild = (this.props.child != nextProps.child)
    const diffStateChild = (this.state.child != nextState.child)

    return (diffPropsChild || diffStateChild)
  }

  componentWillReceiveProps(nextProps, nextState){
    const samePropsChild = (this.props.child == nextProps.child)
    const sameStateChild = (this.state.child == nextState.child)

    if (samePropsChild && sameStateChild) return false

    const thisModal = getModal(this.props.child)
    const nextModal = getModal(nextProps.child)

    // Open New Modal
    if (!thisModal && !!nextModal){
      return this.setState({
        open  : true,
        child : nextModal,
        props : get(nextProps, 'props', {}),
      })
    }

    // Close Modal
    if (!!thisModal && !nextModal){
      return this.setState({
        open  : false,
      }, () => setTimeout(() => this.setState({
        open  : false,
        child : null,
        props : {},
      }), delay))
    }

    // Switch Between Modals
    if (!!thisModal && !!nextModal){
      return this.setState({
        open  : false,
      }, () => setTimeout(() => this.setState({
        open  : true,
        child : nextModal,
        props : get(nextProps, 'props', {}),
      }), delay))
    }
  }

  //-----------  Event Handlers  -----------//

  closeModal = () => {
    const { options: { onClose }, modalActions: { hideModal }} = this.props

    this.setState({ open: false }, () => {
      setTimeout(() => {
        if (onClose) onClose()
        hideModal()
      }, delay)
    })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { open, props, child: Child } = this.state
    const { preventClose } = this.props.options

    const hasModal   = !!Child
    const shadeClick = preventClose ? null : this.closeModal

    return (
      <Modal.Wrapper
        footer={null}
        visible={open}
        closable={!preventClose}
        onCancel={this.closeModal}
      >
        {hasModal && <Child { ...props } />}
      </Modal.Wrapper>
    )
  }
}

//-----------  Prop Types  -----------//

ModalWrapper.propTypes = {
  child        : PropTypes.string,
  props        : PropTypes.object.isRequired,
  options      : PropTypes.shape({
    onClose      : PropTypes.func,
    preventClose : PropTypes.bool,
  }).isRequired,
  modalActions : PropTypes.object.isRequired,
}

//-----------  Export  -----------//

export default ModalWrapper
