//-----------  Imports  -----------//

import React, { PropTypes }   from 'react'
import { Input, Button }      from 'antd'

import PartyForm              from 'containers/PartyForm'
import FormWizard             from 'containers/FormWizard'
import { ServiceNotesForm,
         ServicePersonForm,
         ServiceDetailsForm } from 'containers/ServiceForms'

import PageWrapper            from 'components/PageWrapper'
import RecordsHeader          from 'components/RecordsHeader'

//-----------  Definitions  -----------//

const title = 'Record Service'

const breadcrumbs = [{
  link  : '/',
  title : 'Dashboard'
},{
  link  : '/jobs',
  title : 'Jobs'
}]

//-----------  Component  -----------//

class ServicesRoute extends React.Component {

  state = {
    party   : null,
    service : null
  }

  //-----------  Event Handlers  -----------//

  onPartySuccess = (party) => {
    console.log('party:', party)
    this.setState({ party: party.key })
  }

  onDetailsSuccess = (service) => {
    console.log('service:', service)
    this.setState({ service })
  }

  onPersonSuccess = (service) => {
    console.log('service:', service)
    this.setState({ service })
  }

  onNotesSuccess = (service) => {
    const { jobID, redirectTo } = this.props
    return redirectTo(`/jobs/${jobID}`)
  }

  //-----------  HTML Render  -----------//

  render(){
    const { job, jobID, isLoading, ...props } = this.props
    const { party, service } = this.state

    const jobCrumb = { link: `/jobs/${jobID}`, title: job.id }
    const serCrumb = { title: 'Service' }

    const steps = [{
      form            : PartyForm,
      title           : 'Service Party',
      canSelect       : true,
      initialValues   : { party, job: jobID },
      onSubmitSuccess : this.onPartySuccess,
    }, {
      form            : ServiceDetailsForm,
      title           : 'Service Details',
      initialValues   : { party, ...service, job: jobID },
      onSubmitSuccess : this.onDetailsSuccess,
    }, {
      form            : ServicePersonForm,
      title           : 'Service Person',
      initialValues   : { party, ...service, job: jobID },
      onSubmitSuccess : this.onPersonSuccess,
    }, {
      form            : ServiceNotesForm,
      title           : 'Service Notes',
      initialValues   : { party, ...service, job: jobID },
      onSubmitSuccess : this.onNotesSuccess,
    }]

    return (
      <PageWrapper title={title} loading={isLoading} breadcrumbs={[ ...breadcrumbs, jobCrumb, serCrumb ]} style={{ background: 'white' }}>
        <FormWizard steps={steps} />
      </PageWrapper>
    )
  }
}


//-----------  Prop Types  -----------//

ServicesRoute.propTypes = {
  job          : PropTypes.object.isRequired,
  jobID        : PropTypes.string.isRequired,
  isLoading    : PropTypes.bool.isRequired,
  redirectTo   : PropTypes.func.isRequired,
  modalActions : PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default ServicesRoute
