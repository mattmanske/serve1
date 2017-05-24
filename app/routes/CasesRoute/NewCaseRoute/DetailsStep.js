//-----------  Imports  -----------//

import Route                from './styles'

import React, { PropTypes } from 'react'
import { Field }            from 'redux-form'
import { Input, Select }    from 'antd'

import ReduxAntdSubmit      from 'components/ReduxAntdSubmit'
import ReduxAntdWrapper     from 'components/ReduxAntdWrapper'

//-----------  Definitions  -----------//

const Option = Select.Option

const courtTypes = [{
  value : 'municipal_court',
  label : 'Municipal Court'
}, {
  value : 'circuit_court',
  label : 'Circuit Court'
}, {
  value : 'district_court',
  label : 'District Court'
}, {
  value : 'court_of_appeals',
  label : 'Court of Appeals'
}, {
  value : 'supreme_court',
  label : 'Supreme Court'
}, {
  value : 'department_of_workforce_development',
  label : 'Dept. of Workforce Development'
}, {
  value : 'other',
  label : 'Other...'
}]

//-----------  Component  -----------//

const DetailStep = ({ title, backButton, ...props }) => {

  return (
    <Route.Form noValidate onSubmit={props.handleSubmit}>
      <Route.Title>{title}</Route.Title>

      <Field
        name='number'
        label='Case #'
        required={true}
        layout='horizontal'
        component={ReduxAntdWrapper}
      >
        <Input />
      </Field>

      <Field
        name='state'
        label='State'
        required={true}
        layout='horizontal'
        component={ReduxAntdWrapper}
      >
        <Select>
          <Option value='WI'>Wisconsin</Option>
        </Select>
      </Field>

      <Field
        name='county'
        label='County'
        required={true}
        layout='horizontal'
        component={ReduxAntdWrapper}
      >
        <Select>
          <Option value='Dane'>Dane</Option>
        </Select>
      </Field>

      <Field
        name='court_type'
        label='Court Type'
        required={true}
        layout='horizontal'
        component={ReduxAntdWrapper}
      >
        <Select>
          {courtTypes.map(({ value, label }) => (
            <Option key={value} value={value}>{label}</Option>
          ))}
        </Select>
      </Field>

      <Field
        name='plantiff'
        label='Plantiff'
        required={true}
        layout='horizontal'
        component={ReduxAntdWrapper}
      >
        <Input />
      </Field>

      <Field
        name='defendant'
        label='Defendant'
        required={true}
        layout='horizontal'
        component={ReduxAntdWrapper}
      >
        <Input />
      </Field>

      <ReduxAntdSubmit text='Save Case' other={backButton} { ...props } />
    </Route.Form>
  )
}

//-----------  Prop Types  -----------//

DetailStep.propTypes = {
  title           : PropTypes.string.isRequired,
  backButton      : PropTypes.node,
  onSubmit        : PropTypes.func.isRequired,
  onSubmitFail    : PropTypes.func.isRequired,
  onSubmitSuccess : PropTypes.func.isRequired,
}

//-----------  Exports  -----------//

export default DetailStep
