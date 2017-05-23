//-----------  Imports  -----------//

import Dashboard            from './styles'

import React, { PropTypes } from 'react'

import BoundsWrapper        from 'components/BoundsWrapper'

//-----------  Definitions  -----------//

const title = 'Welcome'

//-----------  Component  -----------//

class HomeRoute extends React.Component {

  render(){
    return (
      <Dashboard.Page title={title}>
        <BoundsWrapper type='compact'>
          <h1>Serve1 Homepage</h1>
        </BoundsWrapper>
      </Dashboard.Page>
    )
  }
}

//-----------  Prop Types  -----------//

HomeRoute.propTypes = {}

//-----------  Exports  -----------//

export default HomeRoute
