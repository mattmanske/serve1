//-----------  Imports  -----------//

import React, { PropTypes } from 'react'
import { Input, Button }    from 'antd'

import PageWrapper          from 'components/PageWrapper'
import RecordsHeader        from 'components/RecordsHeader'

import { recordsToArray }   from 'utils/records'

//-----------  Definitions  -----------//

const title  = 'Contact Details'
const Search = Input.Search

let breadcrumbs = [{
  link  : '/',
  title : 'Dashboard'
},{
  link  : '/contacts',
  title : 'Contacts'
}]

//-----------  Component  -----------//

class ContactDetailsRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { client, contact, modalActions, ...props } = this.props
    const crumb = { title: contact ? `${contact.first_name} ${contact.last_name}` : '...' }

    return (
      <PageWrapper title={title} loading={!contact} breadcrumbs={[ ...breadcrumbs, crumb ]}>
        <RecordsHeader
          title={`${contact.first_name} ${contact.last_name}` || title}
          subtitle={client.name}
        />
      </PageWrapper>
    )
  }
}

//-----------  Prop Types  -----------//

ContactDetailsRoute.propTypes = {
  client       : PropTypes.object.isRequired,
  contact      : PropTypes.object.isRequired,
  modalActions : PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default ContactDetailsRoute
