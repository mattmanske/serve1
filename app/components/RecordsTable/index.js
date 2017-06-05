//-----------  Imports  -----------//

import Cell         from './styles'

import moment       from 'moment'

import React        from 'react'
import { Icon }     from 'antd'

import RecordsTable from './RecordsTable'

//-----------  C  -----------//

let Columns = {}

//-----------  Column Helpers  -----------//

Columns.Created = {
  key       : 'created',
  title     : 'Created',
  dataIndex : 'created_at',
  render    : created_at => (
    <Cell.Small>{moment.utc(created_at).fromNow()}</Cell.Small>
  )
}

Columns.Updated = {
  key       : 'updated',
  title     : 'Updated',
  dataIndex : 'updated_at',
  render    : updated_at => (
    <Cell.Small>{moment.utc(updated_at).fromNow()}</Cell.Small>
  )
}

Columns.Avatar = (index, type) => {
  return {
    key       : 'avatar',
    dataIndex : index,
    className : 'avatar-col',
    render    : value => {
      const props = type ? { [type]: value } : { [index]: value }
      return (
        <Cell.Avatar { ...props } size={40} textSizeRatio={3.5} round />
      )
    }
  }
}

Columns.Actions = (actions) => ({
  key       : 'actions',
  className : 'actions-col',
  render    : record => (
    <Cell.PopMenu
      placement='left'
      content={(
        <Cell.Actions>
          {actions && actions.map((action, key) => (
            <a
              key={key}
              disabled={action.disabled}
              onClick={evt => action.onClick(record, evt)}
            >
              <Icon type={action.icon} /> {action.title}
            </a>
          ))}
        </Cell.Actions>
      )}
    >
      <Cell.PopIcon type='ellipsis' />
    </Cell.PopMenu>
  )
})

//-----------  Exports  -----------//

export { Cell, Columns }

export default RecordsTable
