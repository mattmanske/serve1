//-----------  Imports  -----------//

import Dashboard            from './styles'

import React, { PropTypes } from 'react'

import BoundsWrapper        from 'components/BoundsWrapper'

//-----------  Definitions  -----------//

const title = 'Dashboard'

//-----------  Component  -----------//

class DashboardRoute extends React.Component {

  render(){
    return (
      <Dashboard.Page title={title} fill={true}>
        <BoundsWrapper type='compact'>
          <h1>Dashboard</h1>
        </BoundsWrapper>
      </Dashboard.Page>
    )
  }
}

//-----------  Prop Types  -----------//

DashboardRoute.propTypes = {}

//-----------  Exports  -----------//

export default DashboardRoute
