//-----------  Imports  -----------//

import React, { PropTypes } from 'react'

import CaseForm             from 'containers/CaseForm'
import ClientForm           from 'containers/ClientForm'
import ContactForm          from 'containers/ContactForm'
import FormWizard           from 'containers/FormWizard'

import PageWrapper          from 'components/PageWrapper'

//-----------  Definitions  -----------//

const title = 'Create New Case'

const breadcrumbs = [{
  link  : '/',
  title : 'Dashboard'
},{
  link  : '/cases',
  title : 'Cases'
},{
  title : 'New'
}]

//-----------  Component  -----------//

class NewCaseRoute extends React.Component {

  state = {
    client  : null,
    contact : null
  }

  componentWillUnmount(){
    this.props.resetForms()
  }

  //-----------  Event Handlers  -----------//

  // onClientSuccess = (client) => {
  //   this.setState({ client })
  //   console.log('client ID:', client)
  // }
  //
  // onContactSuccess = (contact) => {
  //   this.setState({ contact })
  //   console.log('contact ID:', contact)
  // }

  onCaseSuccess = (kase) => {
    console.log('case ID:', kase)
  }

  //-----------  HTML Render  -----------//

  render(){
    const { isLoading, ...props } = this.props
    const { client, contact } = this.state

    const steps = [{
    //   form            : ClientForm,
    //   title           : 'Case Client',
    //   canSelect       : true,
    //   onSubmitSuccess : this.onClientSuccess,
    // }, {
    //   form            : ContactForm,
    //   title           : 'Primary Contact',
    //   canSelect       : true,
    //   initialValues   : { client },
    //   onSubmitSuccess : this.onContactSuccess,
    // }, {
      form            : CaseForm,
      title           : 'Case Details',
      initialValues   : { client, contact },
      onSubmitSuccess : this.onCaseSuccess,
    }]

    return (
      <PageWrapper title={title} loading={isLoading} breadcrumbs={breadcrumbs}>
        <FormWizard steps={steps} />
      </PageWrapper>
    )
  }
}

//-----------  Prop Types  -----------//

NewCaseRoute.propTypes = {
  isLoading  : PropTypes.bool.isRequired,
  resetForms : PropTypes.func.isRequired
}

//-----------  Exports  -----------//

export default NewCaseRoute
