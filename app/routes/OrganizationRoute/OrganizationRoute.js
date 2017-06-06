//-----------  Imports  -----------//

import React, { PropTypes } from 'react'

import PageWrapper          from 'components/PageWrapper'

//-----------  Definitions  -----------//

const title = 'Organization Settings'

const breadcrumbs = [{
  link  : '/',
  title : 'Dashboard'
},{
  title : 'Settings'
},{
  title : 'Organization'
}]

//-----------  Component  -----------//

class OrganizationRoute extends React.Component {

  render(){
    const { data, error, isLoading } = this.props.organization

    return (
      <PageWrapper title={title} loading={isLoading} breadcrumbs={breadcrumbs}>
        <h1>Organization Settings</h1>
      </PageWrapper>
    )
  }
}

//-----------  Prop Types  -----------//

OrganizationRoute.propTypes = {
  organization: PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default OrganizationRoute
