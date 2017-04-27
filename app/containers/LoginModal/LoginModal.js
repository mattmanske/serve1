//-----------  Imports  -----------//

import Login                from './styles'
import GoogleIcon           from './assets/google.svg'

import isEmpty              from 'lodash/isEmpty'

import React, { PropTypes } from 'react'

import Button               from 'components/Button'

//-----------  Component  -----------//

const LoginModal = ({ auth, authActions }) => {

  const notAllowed = (!auth.isLoggedIn && !isEmpty(auth.user))
  const isLoading  = (auth.isLoading || !auth.isWatching)
  const onClick    = (notAllowed) ? authActions.signOut : authActions.signIn

  return (
    <Login.Modal>
      {notAllowed ? (
        <Login.Unauthorized>
          <h4>You're not authorized to access this application.</h4>
        </Login.Unauthorized>
      ) : (
        <h5>Login:</h5>
      )}

      <Button
        size='lg'
        color='white'
        onClick={onClick}
        loading={isLoading}
        text={notAllowed ? 'Log Out' : 'Login via Google'}
        iconElem={!notAllowed && <img src={GoogleIcon} width={20} height='auto' />}
      />
    </Login.Modal>
  )
}

//-----------  Prop Types  -----------//

LoginModal.propTypes = {
  auth        : PropTypes.object.isRequired,
  authActions : PropTypes.object.isRequired,
}

//-----------  Export  -----------//

export default LoginModal
