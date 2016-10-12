//-----------  Imports  -----------//

import React     from 'react'
import { Field } from 'redux-form'

//-----------  Class Setup  -----------//

class RegistrationFrom extends React.Component {

  //-----------  Normalization  -----------//

  normalizeSubdomain = (value) => `http://${value && value.toLowerCase()}.serve1.com`

  //-----------  HTML Render  -----------//

  render(){
    const { pristine, reset, submitting, ...props } = this.props

    return (
      <div className="child-form registration-form">
        <h1>Sign Up</h1>

        <fieldset>
          {/* User Email */}
          <div>
            <label>Your Email</label>
            <div>
              <Field
                name="email"
                type="text"
                autoComplete="email"
                placeholder="me@website.com"
                component="input"
              />
            </div>
          </div>

          {/* First Name */}
          <div>
            <label>First Name</label>
            <div>
              <Field
                name="first_name"
                type="text"
                autoComplete="given-name"
                component="input"
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label>Last Name</label>
            <div>
              <Field
                name="last_name"
                type="text"
                autoComplete="family-name"
                component="input"
              />
            </div>
          </div>

          {/* Organization Name */}
          <div>
            <label>Organization</label>
            <div>
              <Field
                name="organization"
                type="text"
                autoComplete="organization"
                component="input"
              />
            </div>
          </div>

          {/* Subdomain */}
          <div>
            <label>Subdomain</label>
            <div>
              <Field
                name="subdomain"
                type="text"
                autoComplete="family-name"
                component="input"
                normalize={this.normalizeSubdomain}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label>Password</label>
            <div>
              <Field
                name="password"
                type="password"
                autoComplete="off"
                placeholder="**********"
                component="input"
              />
            </div>
          </div>

          {/* Password Confirmation */}
          <div>
            <label>Password</label>
            <div>
              <Field
                name="password_confirmation"
                type="password"
                autoComplete="off"
                placeholder="**********"
                component="input"
              />
            </div>
          </div>
        </fieldset>

        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Reset</button>
      </div>
    )
  }
}

//-----------  Export  -----------//

export default RegistrationFrom
