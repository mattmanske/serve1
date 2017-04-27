//-----------  Imports  -----------//

import Route                from './styles'

import moment               from 'moment'
import filter               from 'lodash/filter'
import includes             from 'lodash/includes'
import capitalize           from 'lodash/capitalize'

import React, { PropTypes } from 'react'
import { Icon,
         Table,
         Button,
         DatePicker }       from 'antd'

import Money                from 'components/Money'
import BoundsWrapper        from 'components/BoundsWrapper'

import vars                 from 'styles/variables'

//-----------  Definitions  -----------//

const title = 'Shows'
const check = <Icon type='check-circle' style={{ color: vars.green }} />
const minus = <Icon type='minus-circle-o' style={{ color: vars.redLightest }} />

const members = [
  { id: '-JwTMosYwcz594OTzWNg', name: 'Brian', visible: true },
  { id: '-JwTMosjlnMYoUiec5Yn', name: 'Chris', visible: true },
  { id: '-JwTMosi7tF7I-nIk62m', name: 'Ela', visible: true },
  { id: '-JwTMosap3SX4fNoawMT', name: 'Matt', visible: true },
  { id: '-JwTMosjlnMYoUiec5Ym', name: 'Josh', visible: true },
  { id: '-JwTMosi7tF7I-nIk62n', name: 'Jeff', visible: true },
  { id: '-JwTMosi7tF7I-nIk62o', name: 'Hannah', visible: true },
]

//-----------  Component  -----------//

class ShowsRoute extends React.Component {

  state = {
    month: moment().startOf('month')
  }

  //-----------  Event Handlers  -----------//

  changeMonth = (month) => {
    this.setState({ month: month.startOf('month') })
  }

  disabledMonths = (current) => {
    return current && (current.isBefore('2015-04-30') || current.isAfter(moment()))
  }

  //-----------  HTML Render  -----------//

  render(){
    const { data, error, isLoading, isWatching } = this.props.shows
    const { month } = this.state

    const shows = filter(data, show => moment(show.date).isSame(month, 'month'))

    const pageReady = (isWatching && !isLoading)

    return (
      <Route.Page title={title} loading={!pageReady}>
        <BoundsWrapper>
          <Route.Header>
            <DatePicker.MonthPicker
              size='large'
              format={'MMMM YYYY'}
              defaultValue={month}
              onChange={this.changeMonth}
              disabledDate={this.disabledMonths}
            />
            {pageReady ? (
              <h4>{shows.length} Show{(1 < shows.length) && 's'}</h4>
            ) : (
              <Icon type='loading' />
            )}

            <Button icon='plus' type='primary'>
              Add New Show
            </Button>
          </Route.Header>

          <Table
            loading={!pageReady}
            dataSource={shows}
            pagination={false}
          >
            <Table.Column
              key='date'
              width={75}
              title='Date'
              dataIndex='date'
              render={val => moment(val).format('MMM Do')}
            />
            <Table.Column
              key='name'
              width={150}
              title='Venue'
              dataIndex='name'
              className='venue-col'
              render={val => <strong>{val}</strong>}
            />
            <Table.Column
              key='pay'
              width={75}
              title='Pay'
              dataIndex='payment'
              className='pay-col'
              render={val => <Money value={val} showCents={true} />}
            />
            {members.map(member => (
              <Table.Column
                key={member.id}
                width={75}
                className='member-col'
                dataIndex='participants'
                title={capitalize(member.name)}
                render={arr => includes(arr, member.id) ? check : minus}
              />
            ))}
          </Table>
        </BoundsWrapper>
      </Route.Page>
    )
  }
}

//-----------  Prop Types  -----------//

ShowsRoute.propTypes = {
  shows: PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default ShowsRoute
