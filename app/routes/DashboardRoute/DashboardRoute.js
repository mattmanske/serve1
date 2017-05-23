//-----------  Imports  -----------//

import Block                from './styles'

import React, { PropTypes } from 'react'

import BoundsWrapper        from 'components/BoundsWrapper'

//-----------  Definitions  -----------//

const title       = ''
const description = ''

//-----------  Component  -----------//

class DashboardRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { props, state } = this

    return (
      <Block.Page title={title} description={description}>
        <BoundsWrapper>
          <h1>Dashboard Route</h1>
        </BoundsWrapper>
      </Block.Page>
    )
  }
}

//-----------  Prop Types  -----------//

DashboardRoute.propTypes = {}

//-----------  Exports  -----------//

export default DashboardRoute
