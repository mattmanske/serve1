//-----------  Imports  -----------//

import Route                from './styles'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'
import { Button }           from 'antd'

//-----------  Definitions  -----------//

const title = 'Dashboard'

const breadcrumbs = [{
  title : 'Dashboard'
}]

//-----------  Component  -----------//

class DashboardRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { props, state } = this

    return (
      <Route.Page title={title} breadcrumbs={breadcrumbs}>
        <h1>Dashboard Route</h1>
        <Link to={'/jobs/new'}>
          <Button size='large'>Start New Job</Button>
        </Link>
      </Route.Page>
    )
  }
}

//-----------  Prop Types  -----------//

DashboardRoute.propTypes = {}

//-----------  Exports  -----------//

export default DashboardRoute
