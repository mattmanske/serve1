//-----------  Imports  -----------//

import Route                from './styles'

import React, { PropTypes } from 'react'

//-----------  Definitions  -----------//

const title = 'Create New Case'

//-----------  Component  -----------//

class NewCaseRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { props, state } = this

    return (
      <Route.Page title={title}>
        <h1>New Case Route</h1>
      </Route.Page>
    )
  }
}

//-----------  Prop Types  -----------//

NewCaseRoute.propTypes = {}

//-----------  Exports  -----------//

export default NewCaseRoute
