//-----------  Imports  -----------//

import React     from 'react'
import { Field } from 'redux-form'

//-----------  Class Setup  -----------//

class RegistrationFrom extends React.Component {
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
                name="user.email"
                type="text"
                component="input"
                placeholder="me@website.com"
              />
            </div>
          </div>

          {/* First Name */}
          <div>
            <label>First Name</label>
            <div>
              <Field
                name="uesr.first_name"
                type="text"
                component="input"
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label>Last Name</label>
            <div>
              <Field
                name="uesr.last_name"
                type="text"
                component="input"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label>Password</label>
            <div>
              <Field
                name="uesr.password"
                type="password"
                component="input"
                autoComplete="off"
                placeholder="**********"
              />
            </div>
          </div>

          {/* Password Confirmation */}
          <div>
            <label>Password</label>
            <div>
              <Field
                name="uesr.password_confirmation"
                type="password"
                component="input"
                autoComplete="off"
                placeholder="**********"
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
