//-----------  Imports  -----------//

import React, { PropTypes } from 'react'

import RecordSelector       from 'components/RecordSelector'

//-----------  Component  -----------//

const SelectContact = ({ contacts, ...props }) => {

  console.log('contacts', contacts);

  return (
    <RecordSelector options={clients} { ...props } />
  )
}

//-----------  Prop Types  -----------//

SelectContact.propTypes = {
  contacts  : PropTypes.object.isRequired,
  onChange  : PropTypes.func,
  isLoading : PropTypes.bool.isRequired,
}

//-----------  Export  -----------//

export default SelectContact
