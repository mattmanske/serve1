//-----------  Imports  -----------//

import Route                from './styles'

import React, { PropTypes } from 'react'

//-----------  Definitions  -----------//

const title = 'Case Details'

//-----------  Component  -----------//

class CaseDetailsRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { props, state } = this

    return (
      <Route.Page title={title}>
        <h1>Case Details Route</h1>
      </Route.Page>
    )
  }
}

//-----------  Prop Types  -----------//

CaseDetailsRoute.propTypes = {}

//-----------  Exports  -----------//

export default CaseDetailsRoute
