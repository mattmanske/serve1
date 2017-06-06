//-----------  Imports  -----------//

import React, { PropTypes } from 'react'

import PageWrapper          from 'components/PageWrapper'

//-----------  Definitions  -----------//

const title = 'Your Profile'

const breadcrumbs = [{
  link  : '/',
  title : 'Dashboard'
},{
  title : 'Settings'
},{
  title : 'Profile'
}]

//-----------  Component  -----------//

class ProfileRoute extends React.Component {

  render(){
    const { user } = this.props

    return (
      <PageWrapper title={title} breadcrumbs={breadcrumbs}>
        <h1>Your Profile</h1>
      </PageWrapper>
    )
  }
}

//-----------  Prop Types  -----------//

ProfileRoute.propTypes = {
  user: PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default ProfileRoute
