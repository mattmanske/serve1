//-----------  Imports  -----------//

import Shows                from './styles'
import MemberCell           from './MemberCell'

import reduce               from 'lodash/reduce'
import includes             from 'lodash/includes'

import React, { PropTypes } from 'react'
import { Table }            from 'antd'

import Money                from 'components/Money'

//-----------  Helpers  -----------//

// function getMember


//-----------  Component  -----------//

const ShowsFooter = ({ shows, members, ...props }) => {

  const memberPay = members.map(({ id, name }) => {

    const totalMoney = reduce(shows, (sum, show) => {
      return includes(show.participants, id) ? sum += 100 : sum
    }, 0)
    const totalShows = reduce(shows, (sum, show) => {
      return includes(show.participants, id) ? sum += 1 : sum
    }, 0)
    return { id, name, title: <MemberCell name={name} shows={totalShows} total={totalMoney} />}
  })

  const ShowsCell = shows && `${shows.length} shows`
  const PayCell   = shows && <Money value={reduce(shows, (sum, show) => sum += parseInt(show.payment), 0)} />

  return (
    <Shows.Footer dataSource={[]} pagination={false} { ...props }>
      <Table.Column
        key='date'
        width={60}
        title={<small>Totals:</small>}
      />
      <Table.Column
        key='name'
        width={150}
        title={ShowsCell}
        className='venue-col'
      />
      <Table.Column
        key='pay'
        width={75}
        title={PayCell}
      />
      <Table.Column
        key='booker'
        width={75}
        titl='-'
        className='booked-col'
      />
      {memberPay.map(member => (
        <Table.Column
          key={member.id}
          title={member.title}
          className='member-col'
        />
      ))}
    </Shows.Footer>
  )
}

//-----------  Prop Types  -----------//

ShowsFooter.propTypes = {
  shows   : PropTypes.array.isRequired,
  members : PropTypes.array.isRequired,
}

//-----------  Export  -----------//

export default ShowsFooter
