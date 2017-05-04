//-----------  Imports  -----------//

import Orders               from './styles'

import React, { PropTypes } from 'react'

import Money                from 'components/Money'

//-----------  Component  -----------//

const ItemsColumn = ({ items, ...props }) => {

  return (
    <div>
      {items.map(item => (
        <Orders.Item key={item.type + item.parent}>
          <span>{item.quantity}x <strong>{item.parent} </strong></span>
          <hr />
          <Money value={item.amount/100} />
        </Orders.Item>
      ))}
    </div>
  )
}

//-----------  Prop Types  -----------//

ItemsColumn.ItemsColumn = {
  items: PropTypes.array.isRequired,
}

//-----------  Export  -----------//

export default ItemsColumn
