//-----------  Imports  -----------//

import Block                from './styles'

import React, { PropTypes } from 'react'

import BoundsWrapper        from 'components/BoundsWrapper'

//-----------  Definitions  -----------//

const title       = ''
const description = ''

//-----------  Component  -----------//

class OrdersRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { props, state } = this

    return (
      <Block.Page title={title} description={description}>
        <BoundsWrapper>
          <h1>Orders Route</h1>
        </BoundsWrapper>
      </Block.Page>
    )
  }
}

//-----------  Prop Types  -----------//

OrdersRoute.propTypes = {}

//-----------  Exports  -----------//

export default OrdersRoute
