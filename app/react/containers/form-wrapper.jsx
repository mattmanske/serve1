//-----------  Imports  -----------//

import React            from 'react'
import { connect }      from 'react-redux'
import { Field, reduxForm }    from 'redux-form'

import RegistrationFrom from '../components/forms/registration-form'

//-----------  Class Setup  -----------//

class FormWrapper extends React.Component {

  //-----------  Helpers  -----------//

  getFormClass(){
    switch (this.state.type){
      case 'jobs'         : return JobForm
      case 'cases'        : return CaseForm
      case 'login'        : return LoginForm
      case 'parties'      : return PartyForm
      case 'clients'      : return ClientForm
      case 'contacts'     : return ContactForm
      case 'services'     : return ServiceForm
      case 'affidavits'   : return AffidavitForm
      case 'registration' : return RegistrationFrom
      case 'organization' : return OrganizationForm
    }
  }

 //-----------  Formsy Submission Handlers  -----------//

  onSubmit = (data) => {
    console.log(data)
  }

  //-----------  HTML Element Render  -----------//

  render(){
    const { handleSubmit, ...props } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <RegistrationFrom {...props} />
      </form>
    )
  }
}

//-----------  Redux Connections  -----------//

const mapStateToProps = (state) => {
  return { initialValues: state.resource }
}

//-----------  Export  -----------//

FormWrapper = reduxForm({ form: 'registration' })(FormWrapper)
FormWrapper = connect(mapStateToProps, null)(FormWrapper)

export default FormWrapper
