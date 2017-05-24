//-----------  Imports  -----------//

import Global               from './styles'

import StaticNav            from './StaticNav'
import OrganizationNav      from './OrganizationNav'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'

import SvgLogo              from 'components/SvgLogo'
import BoundsWrapper        from 'components/BoundsWrapper'

//-----------  Component  -----------//

const GlobalHeader = ({ org, auth, isMobile, organization, authActions }) => {

  const orgName  = !!org && !!organization.data && organization.data.name
  const navProps = { auth, authActions }

  return (
    <Global.Header isMobile={isMobile}>
      <BoundsWrapper>
        <Global.Logo>
          <Link to={'/'}>
            {orgName ? (
              <h1>{orgName}</h1>
            ) : (
              <SvgLogo />
            )}
          </Link>
        </Global.Logo>

        {org ? (
          <OrganizationNav { ...navProps } />
        ) : (
          <StaticNav { ...navProps } />
        )}
      </BoundsWrapper>
    </Global.Header>
  )
}

//-----------  Prop Types  -----------//

GlobalHeader.propTypes = {
  org          : PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  auth         : PropTypes.object.isRequired,
  isMobile     : PropTypes.bool.isRequired,
  organization : PropTypes.object.isRequired,
  authActions  : PropTypes.object.isRequired,
}

//-----------  Export  -----------//

export default GlobalHeader
