//-----------  Imports  -----------//

import React, { PropTypes } from 'react'

import JobForm              from 'containers/JobForm'
import CaseForm             from 'containers/CaseForm'
import FormWizard           from 'containers/FormWizard'

import PageWrapper          from 'components/PageWrapper'

//-----------  Definitions  -----------//

const title = 'Create New Job'

const breadcrumbs = [{
  link  : '/',
  title : 'Dashboard'
},{
  link  : '/jobs',
  title : 'Jobs'
},{
  title : 'New'
}]

//-----------  Component  -----------//

class NewJobRoute extends React.Component {

  state = {
    kase: null,
  }

  //-----------  Event Handlers  -----------//

  onCaseSuccess = (kase) => {
    this.setState({ kase })
    console.log('case ID:', kase)
  }

  onJobSuccess = (job) => {
    console.log('job ID:', job)
  }

  //-----------  HTML Render  -----------//

  render(){
    const { isLoading, ...props } = this.props
    const { kase } = this.state

    const steps = [{
      form            : CaseForm,
      title           : 'Case Number',
      canSelect       : true,
      onSubmitSuccess : this.onCaseSuccess,
    }, {
      form            : JobForm,
      title           : 'Job Details',
      initialValues   : { case: kase },
      onSubmitSuccess : this.onJobSuccess,
    }]

    return (
      <PageWrapper title={title} loading={isLoading} breadcrumbs={breadcrumbs}>
        <FormWizard steps={steps} />
      </PageWrapper>
    )
  }
}

//-----------  Prop Types  -----------//

NewJobRoute.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

//-----------  Exports  -----------//

export default NewJobRoute
