//-----------  Imports  -----------//

import Dashboard            from './styles'

import React, { PropTypes } from 'react'

import ShowForm from 'containers/ShowForm'
import BoundsWrapper        from 'components/BoundsWrapper'

//-----------  Definitions  -----------//

const title = 'Dashboard'

//-----------  Component  -----------//

class DashboardRoute extends React.Component {

  render(){
    return (
      <Dashboard.Page title={title} fill={true}>
        <BoundsWrapper type='block'>
          <ShowForm />
        </BoundsWrapper>
      </Dashboard.Page>
    )
  }
}

//-----------  Prop Types  -----------//

DashboardRoute.propTypes = {}

//-----------  Exports  -----------//

export default DashboardRoute
