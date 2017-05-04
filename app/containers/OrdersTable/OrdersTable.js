//-----------  Imports  -----------//

import Table                from './styles'

import ShipColumn           from './ShipColumn'
import ItemsColumn          from './ItemsColumn'
import StatusColumn         from './StatusColumn'
import AddressColumn        from './AddressColumn'
import OrdersFooter         from './OrdersFooter'

import moment               from 'moment'
import find                 from 'lodash/find'
import filter               from 'lodash/filter'

import React, { PropTypes } from 'react'

import Money                from 'components/Money'

//-----------  Component  -----------//

const OrdersTable = ({ rowKey, loading, pagination, dataSource, shipOrder, ...props }) => {

  const tableProps = { rowKey, loading, pagination, dataSource }

  return (
    <Table.Wrapper footer={data => <OrdersFooter orders={data} />} { ...tableProps }>
      <Table.Column
        width={85}
        key='status'
        title='Status'
        dataIndex='status'
        render={(val, record) => ('paid' == val)
          ? <ShipColumn status={val} orderID={record.id} shipOrder={shipOrder} />
          : <StatusColumn status={val} />
        }
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
        dataIndex='status_transitions'
        className='data-col'
        render={val => val.fulfiled
          ? moment(val.fulfiled, 'X').format('MMM Do, YYYY')
          : <small>–</small>
        }
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
        render={val => <AddressColumn address={val.address} />}
      />
      <Table.Column
        key='order'
        title='Order'
        dataIndex='items'
        render={val => <ItemsColumn items={filter(val, { type: 'sku' })} />}
      />
      <Table.Column
        width={70}
        key='sales_tax'
        title='Tax'
        dataIndex='items'
        render={val => <Money value={find(val, { type: 'tax' }).amount/100} />}
      />
      <Table.Column
        width={70}
        key='shipping'
        title='Shipping'
        dataIndex='items'
        render={val => <Money value={find(val, { type: 'shipping' }).amount/100} />}
      />
      <Table.Column
        width={85}
        key='total'
        title='Total'
        dataIndex='amount'
        render={val => <Money value={val/100} />}
      />
    </Table.Wrapper>
  )
}

//-----------  Prop Types  -----------//

OrdersTable.propTypes = {
  rowKey     : PropTypes.string,
  loading    : PropTypes.bool,
  dataSource : PropTypes.array,
  pagination : PropTypes.bool,
  shipOrder  : PropTypes.func.isRequired,
}

OrdersTable.defaultProps = {
  rowKey     : 'id',
  loading    : false,
  dataSource : [],
  pagination : false
}

//-----------  Export  -----------//

export default OrdersTable
