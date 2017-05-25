//-----------  Imports  -----------//

import Form                 from './styles'

import React, { PropTypes } from 'react'
import { Steps, Button }    from 'antd'

//-----------  Definitions  -----------//

const Step = Steps.Step

//-----------  Component  -----------//

const FormWizard = ({ steps, index, status, ...props }) => {

  return (
    <Form.Wizard>
      <Steps size='small' current={index} status={status}>
        {steps.map((step, key) => (
          <Step key={key} { ...step } />
        ))}
      </Steps>
    </Form.Wizard>
  )
}

//-----------  Prop Types  -----------//

FormWizard.propTypes = {
  steps   : PropTypes.array.isRequired,
  status  : PropTypes.string,
  startAt : PropTypes.number
}

FormWizard.defaultProps = {
  index   : 0,
  status  : 'process',
  startAt :
}

//-----------  Export  -----------//

export default FormWizard
