//-----------  Imports  -----------//

import get                from 'lodash/get'

import { connect }        from 'react-redux'

import PartyForm          from './PartyForm'

import { partiesActions } from 'modules/parties/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  isLoading  : state.parties.isLoading,
  selectedID : get(state, 'form.party.initial.id', null),
})

const mapDispatch = (dispatch, ownProps) => ({
  onSelect: (partyID, option) => {
    if (!partyID) return dispatch(initialize('party', {}))

    return new Promise((res, rej) => {
      return dispatch(partiesActions.select(partyID, res, rej))
    }).then(party => {
      return ownProps.onSubmitSuccess && ownProps.onSubmitSuccess(party)
    })
  },
  onSubmit: (values) => {
    return new Promise((res, rej) => {
      return dispatch(partiesActions.update(values, res, rej))
    })
  }
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(PartyForm)
