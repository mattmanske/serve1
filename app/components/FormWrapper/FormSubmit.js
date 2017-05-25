//-----------  Imports  -----------//

import Form                 from './styles'

import React, { PropTypes } from 'react'

import ReduxAntdSubmit      from 'components/ReduxAntdSubmit'
import HorizontalWrapper    from 'components/HorizontalWrapper'

//-----------  Component  -----------//

const FormSubmit = ({ btnText, otherBtn, horizontal, ...props }) => {

  return horizontal ? (
    <HorizontalWrapper>
      <Form.Submit>
        <ReduxAntdSubmit text={btnText} { ...props } />
        {otherBtn && otherBtn}
      </Form.Submit>
    </HorizontalWrapper>
  ) : (
    <Form.Submit>
      <ReduxAntdSubmit text={btnText} { ...props } />
      {otherBtn && otherBtn}
    </Form.Submit>
  )
}

//-----------  Prop Types  -----------//

FormSubmit.propTypes = {
  btnText    : PropTypes.string,
  otherBtn   : PropTypes.node,
  horizontal : PropTypes.bool,
}

//-----------  Export  -----------//

export default FormSubmit
