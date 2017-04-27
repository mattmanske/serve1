//-----------  Imports  -----------//

import React         from 'react'

import PageWrapper   from 'components/PageWrapper'
import BoundsWrapper from 'components/BoundsWrapper'

//-----------  Definitions  -----------//

const title       = 'About Us'
const description = 'Welcome to this page.'

//-----------  Component  -----------//

class AboutRoute extends React.Component {

  render(){
    const { searchActions, ...props } = this.props

    return (
      <PageWrapper title={title} description={description}>
        <BoundsWrapper type='compact'>
          <h1>About Us</h1>
        </BoundsWrapper>
      </PageWrapper>
    )
  }
}

//-----------  Prop Types  -----------//

AboutRoute.propTypes = {}

//-----------  Exports  -----------//

export default AboutRoute
