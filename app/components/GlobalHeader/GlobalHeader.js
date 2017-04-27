//-----------  Imports  -----------//

import Block                from './styles'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'

import MobileMenu           from 'components/MobileMenu'
import BoundsWrapper        from 'components/BoundsWrapper'

//-----------  Component  -----------//

const GlobalHeader = (props) => {

  return (
    <Block.Elem {...props}>
      <BoundsWrapper>
        {props.logo &&
          <Block.Logo>
            <Link to={'/'}>{props.logo}</Link>
          </Block.Logo>
        }

        <Block.Nav>
          {props.isMobile ? (
            <MobileMenu>
              {props.children}
            </MobileMenu>
          ) : (
            props.children
          )}
        </Block.Nav>
      </BoundsWrapper>
    </Block.Elem>
  )
}

//-----------  Prop Types  -----------//

GlobalHeader.propTypes = {
  logo     : PropTypes.element,
  isMobile : PropTypes.bool,
  children : PropTypes.node,
}

//-----------  Export  -----------//

export default GlobalHeader
