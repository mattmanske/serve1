//-----------  Imports  -----------//

import Records              from './styles'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

const RecordsHeader = ({ title, count, children, ...props }) => {

  return (
    <Records.Header { ...props }>
      <Records.Info>
        <Records.Title>{title}</Records.Title>
        <Records.Count>{count ? `${count} Total` : '...'}</Records.Count>
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
  title    : PropTypes.string.isRequired,
  count    : PropTypes.number,
  children : PropTypes.node,
}

//-----------  Export  -----------//

export default RecordsHeader
