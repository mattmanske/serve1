//-----------  Imports  -----------//

import Route                from './styles'

import moment               from 'moment'
import find                 from 'lodash/find'
import filter               from 'lodash/filter'
import compact              from 'lodash/compact'
import without              from 'lodash/without'
import flatMap              from 'lodash/flatMap'
import includes             from 'lodash/includes'
import capitalize           from 'lodash/capitalize'

import React, { PropTypes } from 'react'
import { Icon,
         Table,
         Badge,
         Switch,
         Button }           from 'antd'

import Money                from 'components/Money'
import BoundsWrapper        from 'components/BoundsWrapper'

import vars                 from 'styles/variables'

//-----------  Definitions  -----------//

const title  = 'Orders'
const status = ['fulfilled', 'paid', 'created', 'canceled']
const check  = <Icon type='check-circle' style={{ color: vars.green, fontSize: '1.25em' }} />
const minus  = <Icon type='exclamation-circle' style={{ color: vars.yellow, fontSize: '1.25em' }} />

//-----------  Helpers  -----------//

function getStatusText(status){
  switch (status){
    case 'fulfilled' : return 'Shipped'
    case 'canceled'  : return 'Canceled'
    case 'created'   : return 'Unpaid'
    case 'paid'      : return 'Ready'
    default          : return ''
  }
}

function getStatusColor(status){
  switch (status){
    case 'fulfilled' : return vars.green
    case 'canceled'  : return vars.red
    case 'created'   : return vars.yellow
    case 'paid'      : return vars.blue
    default          : return vars.gray
  }
}

function getStatusIcon(status, open = true){
  switch (status){
    case 'fulfilled' : return `check-circle${open ? '-o' : ''}`
    case 'canceled'  : return `close-circle${open ? '-o' : ''}`
    case 'created'   : return `exclamation-circle${open ? '-o' : ''}`
    case 'paid'      : return `plus-circle${open ? '-o' : ''}`
    default          : return ''
  }
}

//-----------  Component  -----------//

class OrdersRoute extends React.Component {

  state = {
    filters: ['paid']
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

    const pageReady = (!isLoading)

    return (
      <Route.Page title={title} loading={!pageReady}>
        <BoundsWrapper>
          <Route.Header>
            <h3>{flatMap(data, arr => arr).length} Orders</h3>
            <div>
              <h5>Filter By Status:</h5>
              {status.map(status => {
                const selected = includes(filters, status)
                return (
                  <Badge
                    key={status}
                    showZero={true}
                    count={data[status] ? data[status].length : 0}
                    style={{ backgroundColor: getStatusColor(status) }}
                  >
                    <Button
                      type={selected ? 'primary' : 'dashed'}
                      icon={getStatusIcon(status, !selected)}
                      onClick={() => this.toggleFilter(status, selected)}
                    >
                      {getStatusText(status)}
                    </Button>
                  </Badge>
                )
              })}
            </div>
          </Route.Header>

          <Table
            rowKey='id'
            dataSource={orders}
            pagination={hasMore}
            loading={!pageReady}
            // footer={(data) => <ShowsFooter shows={data} members={members} />}
          >
            <Table.Column
              width={75}
              key='status'
              title='Paid'
              dataIndex='status'
              render={val => <Icon type={getStatusIcon(val, false)} style={{ color: getStatusColor(val), fontSize: '1.25em' }} />}
            />
            <Table.Column
              width={125}
              key='order_date'
              title='Date Ordered'
              dataIndex='created'
              className='data-col'
              render={val => moment(val, 'X').format('MMM Do, YYYY')}
            />
            <Table.Column
              width={125}
              key='shipped_date'
              title='Date Shipped'
              dataIndex='created'
              className='data-col'
              render={val => moment(val, 'X').format('MMM Do, YYYY')}
            />
            <Table.Column
              key='customer'
              title='Customer'
              dataIndex='shipping'
              className='data-col'
              render={val => <strong>{val.name}</strong>}
            />
            <Table.Column
              key='address'
              title='Address'
              dataIndex='shipping'
              className='data-col'
              render={val => (
                <address>
                  <span>{val.address.line1}<br /></span>
                  {val.address.line2 && <span>{val.address.line2}<br /></span>}
                  <span>{val.address.city}, {val.address.state} {val.address.postal_code}</span>
                </address>
              )}
            />
            <Table.Column
              key='order'
              title='Order'
              dataIndex='items'
              className='data-col'
              render={val => filter(val, { type: 'sku' }).map(item => (
                <Route.OrderItem key={item.type + item.parent}>
                  <span>{item.quantity}x <strong>{item.parent} </strong></span>
                  <hr />
                  <Money value={item.amount/100} />
                </Route.OrderItem>
              ))}
            />
            <Table.Column
              width={75}
              key='sales_tax'
              title='Tax'
              dataIndex='items'
              render={val => <Money value={find(val, { type: 'tax' }).amount/100} />}
            />
            <Table.Column
              width={75}
              key='shipping'
              title='Shipping'
              dataIndex='items'
              render={val => <Money value={find(val, { type: 'shipping' }).amount/100} />}
            />
            <Table.Column
              width={75}
              key='total'
              title='Total'
              dataIndex='amount'
              render={val => <Money value={val/100} />}
            />
          </Table>
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
