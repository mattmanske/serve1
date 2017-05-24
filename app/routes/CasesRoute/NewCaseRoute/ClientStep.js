//-----------  Imports  -----------//

import Route                from './styles'

import React, { PropTypes } from 'react'
import { Field }            from 'redux-form'
import { Input }            from 'antd'

import ReduxAntdSubmit      from 'components/ReduxAntdSubmit'
import ReduxAntdWrapper     from 'components/ReduxAntdWrapper'

import SelectClient         from 'containers/SelectClient'

//-----------  Component  -----------//

class ClientStep extends React.Component {

  onSelect = (selection) => {
    console.log(selection)
  }

  //-----------  HTML Render  -----------//

  render(){
    const { title, backButton, ...props } = this.props

    return (
      <Route.Form noValidate onSubmit={props.handleSubmit}>
        <Route.Title>{title}</Route.Title>

        <SelectClient value={'CL-234'} onChange={this.onSelect} />

        <em>or</em>

        <Field
          name='client.id'
          label='Internal ID'
          required={true}
          layout='horizontal'
          component={ReduxAntdWrapper}
        >
          <Input />
        </Field>

        <Field
          name='client.name'
          label='Name'
          required={true}
          layout='horizontal'
          component={ReduxAntdWrapper}
        >
          <Input />
        </Field>

        <Field
          name='client.email'
          label='Email'
          required={true}
          layout='horizontal'
          component={ReduxAntdWrapper}
        >
          <Input />
        </Field>

        <Field
          name='client.address'
          label='Address'
          layout='horizontal'
          component={ReduxAntdWrapper}
        >
          <Input />
        </Field>

        <Field
          name='client.phone'
          label='Phone'
          layout='horizontal'
          component={ReduxAntdWrapper}
        >
          <Input />
        </Field>

        <ReduxAntdSubmit text='Next' other={backButton} { ...props } />
      </Route.Form>
    )
  }
}

//-----------  Prop Types  -----------//

ClientStep.propTypes = {
  title           : PropTypes.string.isRequired,
  backButton      : PropTypes.node,
  onSubmit        : PropTypes.func.isRequired,
  onSubmitFail    : PropTypes.func.isRequired,
  onSubmitSuccess : PropTypes.func.isRequired,
}

//-----------  Exports  -----------//

export default ClientStep
