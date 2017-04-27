//-----------  Imports  -----------//

import React         from 'react'

import DemoForm      from 'containers/DemoForm'

import PageWrapper   from 'components/PageWrapper'
import BoundsWrapper from 'components/BoundsWrapper'

//-----------  Definitions  -----------//

const title       = 'Homepage'
const description = 'Welcome to this page.'

//-----------  Component  -----------//

class HomeRoute extends React.Component {

  render(){
    const { searchActions, ...props } = this.props

    return (
      <PageWrapper title={title} description={description}>
        <BoundsWrapper type='compact'>
          <h1>Homepage</h1>

          <DemoForm />
        </BoundsWrapper>
      </PageWrapper>
    )
  }
}

//-----------  Prop Types  -----------//

HomeRoute.propTypes = {}

//-----------  Exports  -----------//

export default HomeRoute
