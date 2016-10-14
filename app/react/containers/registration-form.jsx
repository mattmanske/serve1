//-----------  Imports  -----------//

import _                                  from 'lodash'
import sanitize                           from 'sanitize-filename'

import React                              from 'react'
import { connect }                        from 'react-redux'
import { Form, Control, Errors, actions } from 'react-redux-form'

import { convertToSubdomain }             from '../helpers/helpers'

// import UserPage          from '../components/registration-form/user-page'
// import OrganizationPage  from '../components/registration-form/organization-page'

//-----------  Validators  -----------//

import {
  isRequired,
  isEmail,
  isPassword,
  passwordsMatch,
  isSubdomain
} from '../helpers/validators'

//-----------  Class Setup  -----------//

class RegistrationForm extends React.Component {

  state = {
    page: 1
  }

  //-----------  Change Events  -----------//

  onOrgNameChange = (model, value) => {
    return (dispatch) => {
      dispatch(actions.change(model, value))
      dispatch(actions.change('models.organization.subdomain', convertToSubdomain(value)))
    }
  }

  onOrgSubdomainChange = (model, value) => {
    return (dispatch) => {
      dispatch(actions.change(model, convertToSubdomain(value)))
    }
  }

  //-----------  Submission Handlers  -----------//

  onSubmit = (data) => {
    const { forms, ...models } = data
    console.log(models)
  }

  //-----------  HTML Element Render  -----------//

  render(){
    const { page, ...state } = this.state

    return (
      <Form noValidate
        model="models"
        validators={{ '': { passwordsMatch }}}
        onSubmit={(val) => this.onSubmit(val)}
        >

        <fieldset>
          <legend>User</legend>

          <label>Email</label>
          <Control
            type="email"
            model=".user.email"
            validators={{ isRequired, isEmail }}
            validateOn="blur"
            />
          <Errors
            model=".user.email"
            show="touched"
            messages={{
              isRequired: 'Must input an email',
              isEmail: 'Must be a valid email',
            }}
            />

          <label>First Name</label>
          <Control
            type="text"
            model=".user.first_name"
            validators={{ isRequired }}
            validateOn="blur"
            />
          <Errors
            model=".user.first_name"
            show="touched"
            messages={{
              isRequired: 'Must input an first name',
            }}
            />

          <label>Last Name</label>
          <Control
            type="text"
            model=".user.last_name"
            validators={{ isRequired }}
            validateOn="blur"
            />
          <Errors
            model=".user.last_name"
            show="touched"
            messages={{
              isRequired: 'Must input an last name',
            }}
            />

          <label>Password</label>
          <Control
            type="password"
            model=".user.password"
            validators={{ isRequired, isPassword }}
            validateOn="blur"
            />
          <Errors
            model=".user.password"
            show="touched"
            messages={{
              isRequired: 'Must input an password',
              isPassword: 'Must be at least 6 characters'
            }}
            />

          <label>Password Confirmation</label>
          <Control
            type="password"
            model=".user.password_confirmation"
            />
          <Errors
            model="models"
            messages={{
              passwordsMatch: "Passwords do not match"
            }}
            />
        </fieldset>

        <fieldset>
          <legend>User</legend>
          <label>Organization Name</label>
          <Control
            type="email"
            model=".organization.name"
            validators={{ isRequired }}
            validateOn="blur"
            changeAction={ this.onOrgNameChange }
            />
          <Errors
            model=".organization.name"
            show="touched"
            messages={{
              isRequired: 'Must input a name',
            }}
            />

          <label>Organization Subdomain</label>
          <Control
            type="email"
            model=".organization.subdomain"
            //validators={{ isSubdomain }}
            //validateOn="blur"
            asyncValidators={{ isSubdomainAvailable: (val, done) => {
              console.log('here', val, done);
              return setTimeout(
                () => { done(false) }
              , 250)
            }}}
            //changeAction={ this.onOrgSubdomainChange }
            //parser={ (value) => convertToSubdomain(value || '') }
            />
          <Errors
            model=".organization.subdomain"
            show="touched"
            messages={{
              isSubdomain: 'Not a valid subdomain (only letters, numbers & -)',
              isSubdomainAvailable: 'Subdomain not available'
            }}
            />
        </fieldset>

        <div className="form-controls">
          <button>Submit!</button>
        </div>
      </Form>
    )
  }
}

//-----------  Export  -----------//

const mapStateToProps = (state) => {
  const { config, selections } = state
  return { config: config, selections: selections }
}

//-----------  Export  -----------//

export default connect(mapStateToProps)(RegistrationForm)
