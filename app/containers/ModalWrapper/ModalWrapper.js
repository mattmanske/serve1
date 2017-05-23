//-----------  Imports  -----------//

import Block                from './styles'

import get                  from 'lodash/get'

import React, { PropTypes } from 'react'
import { Icon }             from 'antd'

import Button               from 'components/Button'
import PageShade            from 'components/PageShade'

import LoginModal           from 'containers/LoginModal'

//-----------  Definitions  -----------//

const delay = 150

const MODAL_COMPONENTS = {
  LOGIN_MODAL: LoginModal,
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
    size  : get(this.props, 'options.size', 'sm'),
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
        size  : get(nextProps, 'options.size', 'sm'),
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
        size  : 'sm',
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
        size  : get(nextProps, 'options.size', 'sm'),
        props : get(nextProps, 'props', {}),
      }), delay))
    }
  }

  //-----------  Event Handlers  -----------//

  closeModal = () => {
    const { options: { onClose }, modalActions: { hideModal} } = this.props

    this.setState({ open: false }, () => {
      setTimeout(() => {
        if (onClose) onClose()
        hideModal()
      }, delay)
    })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { open, size, props, child: Modal } = this.state
    const { preventClose } = this.props.options

    const hasModal   = !!Modal
    const shadeClick = preventClose ? null : this.closeModal

    return (
      <Block.Wrapper open={open} size={size}>
        <PageShade active={open || hasModal} onClick={shadeClick} />

        <Block.Popup open={open} size={size}>
          <Block.Content open={open} size={size}>
            {hasModal && <Modal { ...props } />}

            {!preventClose &&
              <Block.Close>
                <Icon type='close' onClick={this.closeModal} />
              </Block.Close>
            }
          </Block.Content>
        </Block.Popup>
      </Block.Wrapper>
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
