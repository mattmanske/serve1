//-----------  Imports  -----------//

import Route                from './styles'

import validate             from './validate'

import ClientStep           from './ClientStep'
import ContactStep          from './ContactStep'
import DetailsStep          from './DetailsStep'

import React, { PropTypes } from 'react'
import { reduxForm }        from 'redux-form'
import { Steps, Button }    from 'antd'

import ClientForm           from 'containers/ClientForm'

//-----------  Definitions  -----------//

const Step = Steps.Step

const title = 'Create New Case'
const attrs = {
  form                     : 'new-case',
  destroyOnUnmount         : false,
  forceUnregisterOnUnmount : true,
  validate
}

//-----------  Component  -----------//

class NewCaseRoute extends React.Component {

  state = {
    status     : 'process',
    current    : 0,
    processing : false,
  }

  //-----------  Event Handlers  -----------//

  next = () => {
    this.setState({
      status     : 'process',
      current    : (this.state.current + 1),
      processing : false,
    })
  }

  prev = () => {
    this.setState({
      status     : 'process',
      current    : (this.state.current - 1),
      processing : false,
    })
  }

  error = () => {
    this.setState({ status: 'error', processing: false })
  }

  onClientSubmit = (values) => {
    this.setState({ processing: true })
    return new Promise((res, rej) => this.props.clientsActions.update(values.client, res, rej))
  }

  onClientSuccess = (clientID) => {
    console.log('client ID:', clientID)
    // if (clientID) this.next()
  }

  onContactSubmit = (values) => {
    this.setState({ processing: true })
    return new Promise((res, rej) => this.props.contactsActions.update(values.contact, res, rej))
  }

  onContactSuccess = (values) => {
    // TODO: Set Contact ID
    console.log('contact', values)
    return this.next()
  }

  onDetailsSubmit = (values) => {
    this.setState({ processing: true })
    return new Promise((res, rej) => this.props.casesActions.update(values.case, res, rej))
  }

  onDetailsSuccess = (values) => {
    // TODO: Set Contact ID
    return console.log('case', values)
  }

  //-----------  HTML Render  -----------//

  render(){
    const { status, current, processing } = this.state

    const steps = [{
      form      : ClientStep,
      title     : 'Case Client',
      onSubmit  : this.onClientSubmit,
      onSuccess : this.onClientSuccess,
      onFailure : this.error,
    }, {
      form      : ContactStep,
      title     : 'Primary Contact',
      onSubmit  : this.onContactSubmit,
      onSuccess : this.onContactSuccess,
      onFailure : this.error,
    }, {
      form      : DetailsStep,
      title     : 'Case Details',
      onSubmit  : this.onDetailsSubmit,
      onSuccess : this.onDetailsSuccess,
      onFailure : this.error,
    }]

    const thisStep = steps[current]
    const StepForm = reduxForm(attrs)(thisStep.form)
    const BackBtn  = (0 != current)
      ? <Button size='large' style={{ marginLeft: '0.5em' }} onClick={this.prev}>Prev</Button>
      : null

    return (
      <Route.Page title={title} loading={processing}>
        <Steps current={current} status={status} size='small'>
          {steps.map(({ title }) => (
            <Step key={title} title={title} />)
          )}
        </Steps>

        <Route.Content>
          {(0 == current) &&
            <ClientForm
              title={thisStep.title}
              otherBtn={BackBtn}
              canSelect={true}
              onSubmitFail={thisStep.onFailure}
              onSubmitSuccess={thisStep.onSuccess}
            />
          }

          {(1 == current) &&
            <StepForm
              backButton={BackBtn}
              title={thisStep.title}
              onSubmit={thisStep.onSubmit}
              onSubmitFail={thisStep.onFailure}
              onSubmitSuccess={thisStep.onSuccess}
            />
          }
        </Route.Content>
      </Route.Page>
    )
  }
}

//-----------  Prop Types  -----------//

NewCaseRoute.propTypes = {
  casesActions    : PropTypes.object.isRequired,
  clientsActions  : PropTypes.object.isRequired,
  contactsActions : PropTypes.object.isRequired,
}

//-----------  Exports  -----------//

export default NewCaseRoute
