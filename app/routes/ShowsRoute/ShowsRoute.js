//-----------  Imports  -----------//

import Route                from './styles'

import moment               from 'moment'
import find                 from 'lodash/find'
import filter               from 'lodash/filter'
import includes             from 'lodash/includes'

import React, { PropTypes } from 'react'
import { Icon,
         Table,
         Input,
         Button,
         DatePicker }       from 'antd'

import Money                from 'components/Money'
import ShowsFooter          from 'components/ShowsFooter'
import BoundsWrapper        from 'components/BoundsWrapper'

import vars                 from 'styles/variables'

//-----------  Definitions  -----------//

const title = 'Shows'
const check = <Icon type='check-circle' style={{ color: vars.green, fontSize: '1.25em'  }} />
const minus = <Icon type='minus-circle-o' style={{ color: vars.redLightest, fontSize: '1.25em'  }} />

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

  nextMonth = () => {
    this.setState({ month: this.state.month.add(1, 'months').startOf('month') })
  }

  prevMonth = () => {
    this.setState({ month: this.state.month.subtract(1, 'months').startOf('month') })
  }

  noBackwards = () => {
    return this.state.month.isSameOrBefore('2015-05-01', 'month')
  }

  noForewards = () => {
    return this.state.month.isSameOrAfter(moment(), 'month')
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
            <Input.Group compact>
              <Button
                size='large'
                icon='left'
                onClick={this.prevMonth}
                disabled={this.noBackwards() || !pageReady}
              />
              <DatePicker.MonthPicker
                size='large'
                allowClear={false}
                format={'MMMM YYYY'}
                defaultValue={month}
                onChange={this.changeMonth}
                disabledDate={this.disabledMonths}
              />
              <Button
                size='large'
                icon='right'
                onClick={this.nextMonth}
                disabled={this.noForewards() || !pageReady}
              />
            </Input.Group>

            <Button icon='plus' type='primary'>
              Add New Show
            </Button>
          </Route.Header>

          <Table
            dataSource={shows}
            pagination={false}
            loading={!pageReady}
            footer={(data) => <ShowsFooter shows={data} members={members} />}
          >
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
              className='venue-col'
            />
            <Table.Column
              key='pay'
              width={75}
              title='Pay'
              dataIndex='payment'
              render={val => <Money value={val} />}
            />
            <Table.Column
              key='booker'
              width={75}
              title='Booker'
              dataIndex='booked_by'
              className='booked-col'
              render={val => ('0' == val) ? <small>–</small> : find(members, ['id', val]).name}
            />
            {members.map(member => (
              <Table.Column
                key={member.id}
                className='member-col'
                dataIndex='participants'
                title={member.name}
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
