//-----------  Imports  -----------//

import React, { PropTypes } from 'react'

import PageWrapper          from 'components/PageWrapper'

//-----------  Definitions  -----------//

const title = 'Account Settings'

const breadcrumbs = [{
  link  : '/',
  title : 'Dashboard'
},{
  title : 'Settings'
},{
  title : 'Account'
}]

//-----------  Component  -----------//

class SettingsRoute extends React.Component {

  render(){
    const { user } = this.props

    return (
      <PageWrapper title={title} breadcrumbs={breadcrumbs}>
        <h1>Account Settings</h1>
      </PageWrapper>
    )
  }
}

//-----------  Prop Types  -----------//

SettingsRoute.propTypes = {
  user: PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default SettingsRoute
