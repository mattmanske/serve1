//-----------  Imports  -----------//

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import NewCaseRoute           from './NewCaseRoute'

import { casesActions }       from 'modules/cases/actions'
import { clientsActions }     from 'modules/clients/actions'
import { contactsActions }    from 'modules/contacts/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({})

const mapDispatch = (dispatch) => ({
  casesActions    : bindActionCreators(casesActions, dispatch),
  clientsActions  : bindActionCreators(clientsActions, dispatch),
  contactsActions : bindActionCreators(contactsActions, dispatch),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(NewCaseRoute)
