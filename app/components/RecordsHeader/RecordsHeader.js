//-----------  Imports  -----------//

import Records              from './styles'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

const RecordsHeader = ({ title, count, avatar, subtitle, countType, children, ...props }) => {

  const type = !countType ? 'Total' : (1 != count) ? countType + 's' : countType

  return (
    <Records.Header { ...props }>
      {avatar && avatar}

      <Records.Info>
        <Records.Title>{title}</Records.Title>
        <Records.Count>{count ? `${count} ${type}` : ' '}</Records.Count>
        <Records.Subtitle>{subtitle || ' '}</Records.Subtitle>
      </Records.Info>

      {children &&
        <Records.Actions>
          {children}
        </Records.Actions>
      }
    </Records.Header>
  )
}

//-----------  Prop Types  -----------//

RecordsHeader.propTypes = {
  title     : PropTypes.string.isRequired,
  count     : PropTypes.number,
  avatar    : PropTypes.node,
  subtitle  : PropTypes.node,
  countType : PropTypes.string,
  children  : PropTypes.node,
}

//-----------  Export  -----------//

export default RecordsHeader
