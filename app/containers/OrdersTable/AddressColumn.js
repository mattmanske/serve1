//-----------  Imports  -----------//

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

const AddressColumn = ({ address, ...props }) => {

  const { line1, line2, city, state, postal_code } = address

  return (
    <address>
      <span>{line1}<br /></span>
      {line2 && <span>{line2}<br /></span>}
      <span>{city}, {state} {postal_code}</span>
    </address>
  )
}

//-----------  Prop Types  -----------//

AddressColumn.propTypes = {
  address: PropTypes.object.isRequired,
}

//-----------  Export  -----------//

export default AddressColumn
