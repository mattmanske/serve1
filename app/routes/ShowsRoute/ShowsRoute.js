//-----------  Imports  -----------//

import Route                from './styles'

import moment               from 'moment'
import filter               from 'lodash/filter'

import React, { PropTypes } from 'react'
import { Input,
         Button,
         DatePicker }       from 'antd'

import ShowsTable           from 'containers/ShowsTable'

import BoundsWrapper        from 'components/BoundsWrapper'

import { visibleMembers }   from 'utils/members'

//-----------  Definitions  -----------//

const title = 'Shows'

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

    const shows   = filter(data, show => moment(show.date).isSame(month, 'month'))
    const members = visibleMembers(shows, this.props.members)

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

            <Route.Members onClick={() => this.props.showModal('MEMBERS_FORM', {}, { size: 'rg' })}>
              members
            </Route.Members>

            <Button
              icon='plus'
              type='primary'
              onClick={() => this.props.showModal('SHOW_FORM')}
            >
              Add New Show
            </Button>
          </Route.Header>

          <ShowsTable
            members={members}
            loading={!pageReady}
            dataSource={shows}
          />
        </BoundsWrapper>
      </Route.Page>
    )
  }
}

//-----------  Prop Types  -----------//

ShowsRoute.propTypes = {
  shows     : PropTypes.object.isRequired,
  members   : PropTypes.array.isRequired,
  showModal : PropTypes.func.isRequired,
}

//-----------  Exports  -----------//

export default ShowsRoute
