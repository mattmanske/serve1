//-----------  Imports  -----------//

import Route                from './styles'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'
import { Button }           from 'antd'

//-----------  Definitions  -----------//

const title = 'Cases'

//-----------  Component  -----------//

class CasesRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { props, state } = this

    return (
      <Route.Page title={title}>
        <h1>Cases Route</h1>
        <Link to={'/cases/new'}>
          <Button size='large'>Start New Case</Button>
        </Link>
      </Route.Page>
    )
  }
}

//-----------  Prop Types  -----------//

CasesRoute.propTypes = {}

//-----------  Exports  -----------//

export default CasesRoute
