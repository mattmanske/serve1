//-----------  Imports  -----------//

import Orders               from './styles'

import find                 from 'lodash/find'
import reduce               from 'lodash/reduce'

import React, { PropTypes } from 'react'

import Money                from 'components/Money'

//-----------  Component  -----------//

const OrdersFooter = ({ orders, ...props }) => {

  const totalSalesTax = reduce(orders, (sum, order) => sum += (parseInt(find(order.items, { type: 'tax' }).amount)/100), 0)
  const totalShipping = reduce(orders, (sum, order) => sum += (parseInt(find(order.items, { type: 'shipping' }).amount)/100), 0)
  const totalOrders   = reduce(orders, (sum, order) => sum += (parseInt(order.amount)/100), 0)

  return (
    <Orders.Footer dataSource={[]} pagination={false}>
      <Orders.Column width={85} key='status' />
      <Orders.Column width={125} key='order_date' />
      <Orders.Column width={125} key='shipped_date' />
      <Orders.Column key='customer' />
      <Orders.Column key='address' />
      <Orders.Column width={60} key='order' title={<small>Totals:</small>} />
      <Orders.Column width={70} key='sales_tax' title={<Money value={totalSalesTax} />} />
      <Orders.Column width={70} key='shipping' title={<Money value={totalShipping} />} />
      <Orders.Column width={85} key='total' title={<Money value={totalOrders} />} />
    </Orders.Footer>
  )
}

//-----------  Prop Types  -----------//

OrdersFooter.propTypes = {
  orders: PropTypes.array.isRequired,
}

//-----------  Export  -----------//

export default OrdersFooter
