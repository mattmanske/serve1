//-----------  Imports  -----------//

import Route                from './styles'

import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input,
         Select }           from 'antd'

import BoundsWrapper        from 'components/BoundsWrapper'
import ReduxAntdSubmit      from 'components/ReduxAntdSubmit'
import ReduxAntdWrapper     from 'components/ReduxAntdWrapper'

import { isMoment,
         isNumber,
         isRequired }       from 'utils/forms'

import LoginModal           from 'containers/LoginModal'

//-----------  Definitions  -----------//

const title       = 'Register'
const description = 'Create a new organization'

const Option      = Select.Option

//-----------  Validation  -----------//

function validate(values){
  return {}
}

//-----------  Component  -----------//

class RegistrationRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { user, error, isLoading, isWatching, isLoggedIn } = this.props.auth

    return (
      <Route.Page title={title} description={description} loading={isLoading}>
        <p>Create your Serve1 oragnization.<br />You'll be registered as the organization admin so you can add and manage additional user after creation.</p>

        <BoundsWrapper type={isLoggedIn ? 'compact' : 'small'}>
          {!isLoggedIn &&
            <LoginModal />
          }

          {isLoggedIn &&
            <Route.Split>
              <Route.User>
                <Route.Avatar src={user.photoURL} />
                <h3>{user.displayName}</h3>
                <h6>{user.email}</h6>
              </Route.User>

              <Route.Form noValidate onSubmit={this.props.handleSubmit}>
                <Field
                  name='name'
                  label='Name'
                  required={true}
                  layout='horizontal'
                  component={ReduxAntdWrapper}
                >
                  <Input />
                </Field>

                <Field
                  name='id'
                  label='Org URL'
                  required={true}
                  disabled={true}
                  layout='horizontal'
                  component={ReduxAntdWrapper}
                >
                  <Input />
                </Field>

                <Field
                  name='state'
                  label='State'
                  required={true}
                  disabled={true}
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
                  disabled={true}
                  layout='horizontal'
                  component={ReduxAntdWrapper}
                >
                  <Select>
                    <Option value='Dane'>Dane</Option>
                  </Select>
                </Field>

                <ReduxAntdSubmit text='Create' { ...this.props } />
              </Route.Form>
            </Route.Split>
          }
        </BoundsWrapper>
      </Route.Page>
    )
  }
}

//-----------  Prop Types  -----------//

RegistrationRoute.propTypes = {
  auth            : PropTypes.object.isRequired,
  onSubmit        : PropTypes.func.isRequired,
  onSubmitSuccess : PropTypes.func.isRequired
}

//-----------  Exports  -----------//

export default reduxForm({ form: 'registration', validate })(RegistrationRoute)
