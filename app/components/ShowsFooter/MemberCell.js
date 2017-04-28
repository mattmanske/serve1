//-----------  Imports  -----------//

import Member               from './styles'

import React, { PropTypes } from 'react'

import Money                from 'components/Money'

//-----------  Component  -----------//

const MemberCell = ({ name, shows, total, ...props }) => {

  return (
    <Member.Cell { ...props }>
      <small>{name}: {shows}</small>
      {total ? <Money value={total} /> : <small>–</small>}
    </Member.Cell>
  )
}

//-----------  Prop Types  -----------//

MemberCell.propTypes = {
  name  : PropTypes.string.isRequired,
  shows : PropTypes.number.isRequired,
  total : PropTypes.number,
}

//-----------  Export  -----------//

export default MemberCell
