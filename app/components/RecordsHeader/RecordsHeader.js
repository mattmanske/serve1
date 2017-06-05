//-----------  Imports  -----------//

import Records              from './styles'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

const RecordsHeader = ({ title, count, subtitle, countType, children, ...props }) => {

  const type = !countType ? 'Total' : (1 != count) ? countType + 's' : countType

  return (
    <Records.Header { ...props }>
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
  subtitle  : PropTypes.node,
  countType : PropTypes.string,
  children  : PropTypes.node,
}

//-----------  Export  -----------//

export default RecordsHeader
