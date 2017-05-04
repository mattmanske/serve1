//-----------  Imports  -----------//

import Route                from './styles'

import compact              from 'lodash/compact'
import without              from 'lodash/without'
import flatMap              from 'lodash/flatMap'
import includes             from 'lodash/includes'

import React, { PropTypes } from 'react'
import { Badge, Button }    from 'antd'

import OrdersTable          from 'containers/OrdersTable'

import BoundsWrapper        from 'components/BoundsWrapper'

import { STATUSES,
         orderStatusIcon,
         orderStatusText,
         orderStatusColor } from 'utils/orders'

//-----------  Definitions  -----------//

const title = 'Orders'

//-----------  Component  -----------//

class OrdersRoute extends React.Component {

  state = {
    filters: ['fulfilled', 'paid']
  }

  //-----------  Event Hadlers  -----------//

  toggleFilter = (status, remove = false) => {
    let { filters } = this.state
    filters = remove ? without(filters, status) : filters.concat([status])
    this.setState({ filters })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { data, error, hasMore, isLoading } = this.props.orders
    const { filters } = this.state

    const orders = compact(flatMap(data, (arr, key) => includes(filters, key) ? arr : null))

    return (
      <Route.Page title={title} loading={isLoading}>
        <BoundsWrapper>
          <Route.Header>
            <h3>{flatMap(data, arr => arr).length} Orders</h3>
            <div>
              <h5>Filter By Status:</h5>
              {STATUSES.map(status => {
                const selected = includes(filters, status)
                return (
                  <Badge
                    key={status}
                    showZero={true}
                    count={data[status] ? data[status].length : 0}
                    style={{ backgroundColor: orderStatusColor(status) }}
                  >
                    <Button
                      type={selected ? 'primary' : 'dashed'}
                      icon={orderStatusIcon(status, !selected)}
                      onClick={() => this.toggleFilter(status, selected)}
                    >
                      {orderStatusText(status)}
                    </Button>
                  </Badge>
                )
              })}
            </div>
          </Route.Header>

          <OrdersTable
            rowKey='id'
            loading={isLoading}
            dataSource={orders}
            pagination={hasMore}
          />
        </BoundsWrapper>
      </Route.Page>
    )
  }
}

//-----------  Prop Types  -----------//

OrdersRoute.propTypes = {
  orders: PropTypes.object.isRequired,
}

//-----------  Exports  -----------//

export default OrdersRoute
