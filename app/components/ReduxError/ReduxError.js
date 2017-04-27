//-----------  Imports  -----------//

import Block                from './styles'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

const ReduxError = ({ error }) => {

  return (
    <Block.Elem error={error}>
      {('object' == typeof error) ? (error.message || error.details) : error}
    </Block.Elem>
  )
}

//-----------  Prop Types  -----------//

ReduxError.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

//-----------  Export  -----------//

export default ReduxError
