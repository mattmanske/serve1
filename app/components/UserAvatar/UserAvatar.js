//-----------  Imports  -----------//

import User                 from './styles'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

const UserAvatar = (props) => {

  return (
    <User.Avatar { ...props } />
  )
}

//-----------  Prop Types  -----------//

UserAvatar.propTypes = {
  url  : PropTypes.string.isRequired,
  size : PropTypes.string
}

UserAvatar.defaultProps = {
  size: '3.5em'
}

//-----------  Export  -----------//

export default UserAvatar
