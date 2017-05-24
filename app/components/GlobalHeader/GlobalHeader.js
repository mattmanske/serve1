//-----------  Imports  -----------//

import Block                from './styles'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'

import SvgLogo              from 'components/SvgLogo'
import MobileMenu           from 'components/MobileMenu'
import BoundsWrapper        from 'components/BoundsWrapper'

//-----------  Component  -----------//

const GlobalHeader = ({ name, children, isMobile }) => {

  return (
    <Block.Elem isMobile={isMobile}>
      <BoundsWrapper>
        {name ? (
          <Block.Logo>
            <Link to={'/'}><h1>{name}</h1></Link>
          </Block.Logo>
        ) : (
          <Block.Logo>
            <Link to={'/'}><SvgLogo /></Link>
          </Block.Logo>
        )}

        <Block.Nav>
          {isMobile ? (
            <MobileMenu>
              {children}
            </MobileMenu>
          ) : (
            children
          )}
        </Block.Nav>
      </BoundsWrapper>
    </Block.Elem>
  )
}

//-----------  Prop Types  -----------//

GlobalHeader.propTypes = {
  name     : PropTypes.string,
  isMobile : PropTypes.bool,
  children : PropTypes.node,
}

//-----------  Export  -----------//

export default GlobalHeader
