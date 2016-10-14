//-----------  Imports  -----------//

import _        from 'lodash'
import validaor from 'validator'

//-----------  Validators  -----------//

const isRequired = (val) => val && val.length

const isEmail = (val) => val && validaor.isEmail(val)

const isPassword = (val) => val && (val.length >= 6)

const passwordsMatch = ({ user }) => user.password == user.password_confirmation

const isSubdomain = (val) => val && val.match(/[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?/)

//-----------  Validators  -----------//

export {
  isRequired,
  isEmail,
  isPassword,
  passwordsMatch,
  isSubdomain
}
