//-----------  Imports  -----------//

import React, { PropTypes } from 'react'

import ReduxAntdSubmit      from 'components/ReduxAntdSubmit'
import HorizontalWrapper    from 'components/HorizontalWrapper'

//-----------  Component  -----------//

const FormSubmit = ({ btnText, otherBtn, horizontal, ...props }) => {

  return horizontal ? (
    <HorizontalWrapper>
      {otherBtn && otherBtn}
      <ReduxAntdSubmit text={btnText} { ...props } />
    </HorizontalWrapper>
  ) : (
    <div>
      {otherBtn && otherBtn}
      <ReduxAntdSubmit text={btnText} { ...props } />
    </div>
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
