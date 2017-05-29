//-----------  Imports  -----------//

import Route                from './styles'

import React, { PropTypes } from 'react'

//-----------  Definitions  -----------//

const title = 'Case Details'

let breadcrumbs = [{
  link  : '/',
  title : 'Dashboard'
},{
  link  : '/cases',
  title : 'Cases'
},{
  title : 'Details'
}]

//-----------  Component  -----------//

class CaseDetailsRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { props, state } = this

    breadcrumbs.push

    return (
      <Route.Page title={title} breadcrumbs={breadcrumbs}>
        <h1>Case Details Route</h1>
      </Route.Page>
    )
  }
}

//-----------  Prop Types  -----------//

CaseDetailsRoute.propTypes = {}

//-----------  Exports  -----------//

export default CaseDetailsRoute
