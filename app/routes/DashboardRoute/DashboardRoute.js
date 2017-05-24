//-----------  Imports  -----------//

import Block                from './styles'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'
import { Button }           from 'antd'

//-----------  Definitions  -----------//

const title = 'Dashboard'

//-----------  Component  -----------//

class DashboardRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { props, state } = this

    return (
      <Block.Page title={title}>
        <h1>Dashboard Route</h1>
        <Link to={'/cases/new'}>
          <Button size='large'>Start New Case</Button>
        </Link>
      </Block.Page>
    )
  }
}

//-----------  Prop Types  -----------//

DashboardRoute.propTypes = {}

//-----------  Exports  -----------//

export default DashboardRoute
