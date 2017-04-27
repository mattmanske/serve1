//-----------  Imports  -----------//

import { connect } from 'react-redux'

import ShowsRoute from './ShowsRoute'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  shows: state.shows
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ShowsRoute)
