//-----------  Imports  -----------//

import React, { PropTypes } from 'react'

import { Icon }             from 'antd'

import { orderStatusIcon,
         orderStatusText,
         orderStatusColor } from 'utils/orders'

//-----------  Component  -----------//

const StatusColumn = ({ status, ...props }) => {

  return (
    <div>
      <Icon
        type={orderStatusIcon(status, false)}
        style={{ color: orderStatusColor(status), fontSize: '1.5em' }}
      />
      <br />
      <small style={{ color: orderStatusColor(status) }}>
        {orderStatusText(status)}
      </small>
    </div>
  )
}

//-----------  Prop Types  -----------//

StatusColumn.propTypes = {
  status: PropTypes.string.isRequired,
}

//-----------  Export  -----------//

export default StatusColumn
