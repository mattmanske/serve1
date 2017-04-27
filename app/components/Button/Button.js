//-----------  Imports  -----------//

import Block                from './styles'

import React, { PropTypes } from 'react'

import MaterialIcon         from 'components/MaterialIcon'
import LoadingSpinner       from 'components/LoadingSpinner'

//-----------  Component  -----------//

const Button = (props) => {

  return (!props.href) ? (
    <Block.Elem type={props.type} disabled={props.disabled || props.loading} onClick={props.onClick} { ...props }>
      {props.icon &&
        <MaterialIcon icon={props.icon} />
      }
      {props.children &&
        <Block.Inner outline={props.outline} color={props.color}>{props.children}</Block.Inner>
      }
      {props.loading &&
        <LoadingSpinner />
      }
    </Block.Elem>
  ) : (
    <Block.Link type={props.type} disabled={props.disabled || props.loading} onClick={props.onClick} { ...props }>
      {props.icon &&
        <MaterialIcon icon={props.icon} />
      }
      {props.children &&
        <Block.Inner outline={props.outline} color={props.color}>{props.children}</Block.Inner>
      }
      {props.loading &&
        <LoadingSpinner />
      }
    </Block.Link>
  )
}

//-----------  Prop Types  -----------//

Button.propTypes = {
  type     : PropTypes.string,
  icon     : PropTypes.string,
  href     : PropTypes.string,
  size     : PropTypes.oneOf(['lg', 'rg', 'sm']),
  color    : PropTypes.string,
  target   : PropTypes.string,
  outline  : PropTypes.bool,
  loading  : PropTypes.bool,
  disabled : PropTypes.bool,
  onClick  : PropTypes.func,
}

Button.defaultProps = {
  size     : 'rg',
  color    : 'blue',
  outline  : false,
  loading  : false,
  disabled : false
}

//-----------  Export  -----------//

export default Button
