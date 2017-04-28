//-----------  Imports  -----------//

import Cash                 from './styles'

import React, { PropTypes } from 'react'

//-----------  Helpers  -----------//

function formatNumber(value, seperator = ','){
  if (undefined == value){ return null }
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, seperator)
}

function getDollars(value){
  return formatNumber(value.toString().split('.')[0])
}

function getCents(value){
  const centVal = value.toString().split('.')[1]
  const cents   = centVal ? centVal.slice(0, 2) : '0'
  return (1 == cents.length) ? `${cents}0` : cents
}

//-----------  Component  -----------//

const Money = ({ value, showCents, ...props }) => {

  return (
    <Cash.Wrapper { ...props }>
      <Cash.Sign>$</Cash.Sign>
      {getDollars(value)}
      {showCents && <Cash.Cents>.{getCents(value)}</Cash.Cents>}
    </Cash.Wrapper>
  )
}

//-----------  Prop Types  -----------//

Money.propTypes = {
  value     : PropTypes.node.isRequired,
  showCents : PropTypes.bool
}

Money.defaultProps = {
  showCents: true,
}

//-----------  Export  -----------//

export default Money
