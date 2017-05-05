//-----------  Imports  -----------//

import Table                 from './styles'

import TotalsColumn          from './TotalsColumn'

import reduce                from 'lodash/reduce'

import React, { PropTypes }  from 'react'

import Money                 from 'components/Money'

import { MEMBERS,
         llcShowCount,
         llcTotalIncome,
         memberShowCount,
         memberTotalIncome } from 'utils/shows'

//-----------  Component  -----------//

const ShowsFooter = ({ shows, ...props }) => {

  const llcCount = llcShowCount(shows)
  const llcTotal = llcTotalIncome(shows)

  const showCount = shows.length
  const showTotal = reduce(shows, (sum, show) => sum += parseInt(show.payment), 0)

  return (
    <Table.Footer dataSource={[]} pagination={false} { ...props }>
      <Table.Column key='key' width={50} />
      <Table.Column key='date' width={60} title={<small>Totals:</small>} />
      <Table.Column key='name' width={150} title={`${showCount} shows`} />
      <Table.Column key='pay' width={85} title={<Money value={showTotal} />} />
      <Table.Column key='booker' width={85} title={
        <TotalsColumn title={'LLC'} count={llcCount} total={llcTotal} />
      } />
      {MEMBERS.map(member => {
        const count = memberShowCount(member.id, shows)
        const total = memberTotalIncome(member.id, shows)
        return (
          <Table.Column
            key={member.id}
            title={<TotalsColumn title={member.name} count={count} total={total} />}
          />
        )
      })}
    </Table.Footer>
  )
}

//-----------  Prop Types  -----------//

ShowsFooter.propTypes = {
  shows: PropTypes.array.isRequired,
}

//-----------  Export  -----------//

export default ShowsFooter
