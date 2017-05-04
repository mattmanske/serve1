//-----------  Imports  -----------//

import React, { PropTypes } from 'react'

import { Badge,
         Switch,
         Popconfirm }       from 'antd'

//-----------  Component  -----------//

const ShipColumn = ({ status, orderID, shipOrder, ...props }) => {

  return (
    <Popconfirm
      okText='Yes'
      cancelText='No'
      placement='right'
      title='Mark this order as shipped?'
      onConfirm={() => shipOrder(orderID, 'fulfilled')}
    >
      <a>
        <Badge status='processing' />
        <Switch size='small' checked={('fulfilled' == status)} />
        <br />
        <small>mark shipped</small>
      </a>
    </Popconfirm>
  )
}

//-----------  Prop Types  -----------//

ShipColumn.propTypes = {
  status    : PropTypes.string.isRequired,
  orderID   : PropTypes.string.isRequired,
  shipOrder : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default ShipColumn
