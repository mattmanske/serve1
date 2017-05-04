//-----------  Imports  -----------//

import Table                from './styles'

import ShowsFooter          from './ShowsFooter'

import moment               from 'moment'
import find                 from 'lodash/find'
import includes             from 'lodash/includes'

import React, { PropTypes } from 'react'
import { Icon }             from 'antd'

import Money                from 'components/Money'

import { MEMBERS }          from 'utils/shows'

import vars                 from 'styles/variables'

//-----------  Component  -----------//

const ShowsTable = ({ rowKey, loading, pagination, dataSource, shipOrder, ...props }) => {

  const tableProps = { rowKey, loading, pagination, dataSource }

  dataSource.forEach(show => {
    if ('Lake Edge Church' == show.name) console.log(show)
  })

  return (
    <Table.Wrapper footer={data => <ShowsFooter shows={data} />} { ...tableProps }>
      <Table.Column
        key='date'
        width={60}
        title='Date'
        dataIndex='date'
        render={val => moment(val).format('Do')}
      />
      <Table.Column
        key='name'
        width={150}
        title='Venue'
        dataIndex='name'
      />
      <Table.Column
        key='pay'
        width={85}
        title='Pay'
        dataIndex='payment'
        render={val => <Money value={val} />}
      />
      <Table.Column
        key='booker'
        width={85}
        title='Booker'
        dataIndex='booked_by'
        render={val => ('0' != val)
          ? find(MEMBERS, ['id', val]).name
          : <small>–</small>
        }
      />
      {MEMBERS.map(member => (
        <Table.Column
          key={member.id}
          title={member.name}
          dataIndex='participants'
          render={val => val && includes(val, member.id)
            ? <Icon type='check-circle' style={{ color: vars.green, fontSize: '1.25em'  }} />
            : <Icon type='minus-circle-o' style={{ color: vars.redLightest, fontSize: '1.25em'  }} />
          }
        />
      ))}
    </Table.Wrapper>
  )
}

//-----------  Prop Types  -----------//

ShowsTable.propTypes = {
  rowKey     : PropTypes.string,
  loading    : PropTypes.bool,
  dataSource : PropTypes.array,
  pagination : PropTypes.bool,
}

ShowsTable.defaultProps = {
  rowKey     : 'key',
  loading    : false,
  dataSource : [],
  pagination : false
}

//-----------  Export  -----------//

export default ShowsTable
