//-----------  Imports  -----------//

import React, { PropTypes } from 'react'
import { Input, Button }    from 'antd'

import ContactsTable        from 'containers/ContactsTable'

import PageWrapper          from 'components/PageWrapper'
import RecordsHeader        from 'components/RecordsHeader'

import { recordsToArray }   from 'utils/records'

//-----------  Definitions  -----------//

const title  = 'Contacts'
const Search = Input.Search

const breadcrumbs = [{
  link  : '/',
  title : 'Dashboard'
},{
  title : 'Contacts'
}]

//-----------  Component  -----------//

class ContactsRoute extends React.Component {

  //-----------  Event Handlers  -----------//

  newContact = () => {
    const { redirectTo, modalActions } = this.props

    modalActions.showModal('CONTACT_FORM', {
      canSelect       : false,
      onSubmitSuccess : contact => {
        redirectTo(`contacts/${contact.key}`)
        modalActions.hideModal()
      }
    }, { title: 'Add Contact' })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { contacts, modalActions, ...props } = this.props
    const { data, error, isWatching } = contacts

    const records = recordsToArray(data)

    const createButton = (
      <Button type='primary' icon='plus' onClick={this.newContact}>
        Add Contact
      </Button>
    )

    return (
      <PageWrapper title={title} loading={!isWatching} breadcrumbs={breadcrumbs}>
        <RecordsHeader title={title} count={records.length}>
          <Search placeholder='Search Contacts...' disabled />
          {createButton}
        </RecordsHeader>

        <ContactsTable records={records} empty={createButton} />
      </PageWrapper>
    )
  }
}

//-----------  Prop Types  -----------//

ContactsRoute.propTypes = {
  contacts     : PropTypes.object.isRequired,
  redirectTo   : PropTypes.func.isRequired,
  modalActions : PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default ContactsRoute
