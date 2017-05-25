//-----------  Imports  -----------//

import Form                 from './styles'

import isFunction           from 'lodash/isFunction'

import React, { PropTypes } from 'react'
import { Steps, Button }    from 'antd'

//-----------  Definitions  -----------//

const Step = Steps.Step

//-----------  Component  -----------//

class FormWizard extends React.Component {

  state = {
    index      : 0,
    status     : 'process',
    processing : false,
  }

  //-----------  Event Handlers  -----------//

  next = () => {
    const nextIndex = (this.state.index + 1)

    if (nextIndex < this.props.steps.length){
      this.props.onChange(nextIndex)
      this.setState({
        index      : nextIndex,
        status     : 'process',
        processing : false,
      })
    }
  }

  prev = () => {
    const prevIndex = (this.state.index - 1)

    if (prevIndex >= 0){
      this.props.onChange(prevIndex)
      this.setState({
        index      : prevIndex,
        status     : 'process',
        processing : false,
      })
    }
  }

  error = (nextFunc, ...args) => {
    this.setState({ status: 'error', processing: false })
    if (isFunction(nextFunc)) nextFunc(args)
  }

  //-----------  HTML Render  -----------//

  render(){
    const { index, status, processing } = this.state
    const { steps, ...props } = this.props

    const { form: StepForm, onSubmitFail, ...attrs } = step[index]

    const backBtn = !index && <Button size='large' onClick={this.prev}>Prev</Button>
    const btnText = (index == (steps.length - 1)) ? 'Finish' : 'Next'

    return (
      <Form.Wizard>
        <Steps size='small' current={index} status={status}>
          {steps.map((step, key) => (
            <Step key={key} { ...step } />
          ))}
        </Steps>

        <Form.Content>
          <StepForm { ...attrs }
            btnText={btnText}
            otherBtn={backBtn}
            onSubmitFail={(...args) => this.error(onSubmitFail, args)}
          />
        </Form.Content>
      </Form.Wizard>
    )
  }
}

//-----------  Prop Types  -----------//

FormWizard.propTypes = {
  steps: PropTypes.array.isRequired,
}

//-----------  Export  -----------//

export default FormWizard
