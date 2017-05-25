//-----------  Imports  -----------//

import Form                 from './styles'

import isFunction           from 'lodash/isFunction'

import React, { PropTypes } from 'react'
import { Steps, Button }    from 'antd'

//-----------  Definitions  -----------//

const Step = Steps.Step

const keepForm = {
  destroyOnUnmount         : false,
  forceUnregisterOnUnmount : true
}

//-----------  Component  -----------//

class FormWizard extends React.Component {

  state = {
    index      : 0,
    status     : 'process',
    processing : false,
  }

  //-----------  Event Handlers  -----------//

  next = () => {
    const index = (this.state.index + 1)

    if (index < this.props.steps.length){
      this.props.onChange(index)
      this.setState({ index })
    }
  }

  prev = () => {
    const index = (this.state.index - 1)

    if (index >= 0){
      this.props.onChange(index)
      this.setState({ index })
    }
  }

  fail = (nextFunc, errors, dispatch, submitError, props) => {
    this.setState({ status: 'error', processing: false })
    if (isFunction(nextFunc)) nextFunc(errors, dispatch, submitError, props)
  }

  success = (nextFunc, result, dispatch, props) => {
    this.setState({ status: 'process', processing: true })
    if (isFunction(nextFunc)) nextFunc(result, dispatch, props)
    if (result) this.next()
  }

  //-----------  HTML Render  -----------//

  render(){
    const { index, status, processing } = this.state
    const { steps, ...props } = this.props

    const { form: StepForm, onSubmitFail, onSubmitSuccess, ...attrs } = steps[index]

    const backBtn = !!index && <Button size='large' onClick={this.prev}>Prev</Button>
    const btnText = (index == (steps.length - 1)) ? 'Finish' : 'Next'

    return (
      <Form.Wizard>
        <Steps size='small' current={index} status={status}>
          {steps.map((step, key) => (
            <Step
              key={key}
              icon={step.icon}
              title={step.title}
              status={step.status}
              description={step.description}
            />
          ))}
        </Steps>

        <Form.Content>
          <StepForm
            { ...attrs }
            { ...keepForm }
            btnText={btnText}
            otherBtn={backBtn}
            onSubmitFail={(errors, dispatch, submitError, props) => this.fail(onSubmitFail, errors, dispatch, submitError, props)}
            onSubmitSuccess={(result, dispatch, props) => this.success(onSubmitSuccess, result, dispatch, props)}
          />
        </Form.Content>
      </Form.Wizard>
    )
  }
}

//-----------  Prop Types  -----------//

FormWizard.propTypes = {
  steps    : PropTypes.array.isRequired,
  onChange : PropTypes.func,
}

FormWizard.defaultProps = {
  onChange: () => {}
}

//-----------  Export  -----------//

export default FormWizard
