//-----------  Imports  -----------//

import Route                from './styles'

import React, { PropTypes } from 'react'

//-----------  Definitions  -----------//

const title = 'Case Details'

const breadcrumbs = [{
  link  : '/',
  title : 'Dashboard'
},{
  link  : '/cases',
  title : 'Cases'
}]

//-----------  Component  -----------//

class CaseDetailsRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { kase, kaseID, ...props } = this.props
    const crumb = { title: kaseID || '...' }

    return (
      <Route.Page title={title} loading={!kase} breadcrumbs={[ ...breadcrumbs, crumb ]}>
        <h1>{kaseID}</h1>
      </Route.Page>
    )
  }
}

//-----------  Prop Types  -----------//

CaseDetailsRoute.propTypes = {
  kase   : PropTypes.object.isRequired,
  kaseID : PropTypes.string.isRequired
}

//-----------  Exports  -----------//

export default CaseDetailsRoute
