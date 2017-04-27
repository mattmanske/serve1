//-----------  Imports  -----------//

import Route                from './styles'

import moment               from 'moment'
import filter               from 'lodash/filter'

import React, { PropTypes } from 'react'
import { DatePicker }       from 'antd'

import BoundsWrapper        from 'components/BoundsWrapper'

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

  disabledMonths = (current) => {
    return current && (current.isBefore('2015-04-30') || current.isAfter(moment()))
  }

  //-----------  HTML Render  -----------//

  render(){
    const { data, error, isLoading, isWatching } = this.props.shows
    const { month } = this.state

    const shows = filter(data, show => moment(show.date).isSame(month, 'month'))

    const pageReady = (isWatching && !isLoading)

    console.log(shows)

    return (
      <Route.Page title={title}>
        <BoundsWrapper>
          <Route.Header>
            <DatePicker.MonthPicker
              size='large'
              format={'MMMM YYYY'}
              defaultValue={month}
              onChange={this.changeMonth}
              disabledDate={this.disabledMonths}
            />
          </Route.Header>

          {/* <TableWrapper
            rowHeight={50}
            headerHeight={30}
            rowsCount={display.length}
          >
          </TableWrapper> */}
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
