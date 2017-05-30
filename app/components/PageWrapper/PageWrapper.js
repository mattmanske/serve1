//-----------  Imports  -----------//

import Page                 from './styles'

import React, { PropTypes } from 'react'
import { Breadcrumb }       from 'antd'
import { Link }             from 'react-router'
import Helmet               from 'react-helmet'

//-----------  Definitions  -----------//

const BreadcrumbItem = Breadcrumb.Item

//-----------  Component  -----------//

const PageWrapper = ({ title, loading, children, description, breadcrumbs, ...props }) => {

  return (
    <Page.Wrapper>
      <Helmet title={title} meta={[{ name: 'description', content: description }]} />

      <Page.Header>
        <Breadcrumb>
          {breadcrumbs.map((breadcrumb, index) => (
            <BreadcrumbItem key={index}>
              {breadcrumb.link ? (
                <Link to={breadcrumb.link}>{breadcrumb.title}</Link>
              ) : (
                <Page.Strong>{breadcrumb.title}</Page.Strong>
              )}
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      </Page.Header>

      <Page.Main loading={loading} { ...props }>
        {children}
      </Page.Main>
    </Page.Wrapper>
  )
}

//-----------  Prop Types  -----------//

PageWrapper.propTypes = {
  title       : PropTypes.string,
  loading     : PropTypes.bool,
  description : PropTypes.string,
  breadcrumbs : PropTypes.array.isRequired,
  children    : PropTypes.node.isRequired
}

PageWrapper.defaultProps = {
  loading : false
}

//-----------  Export  -----------//

export default PageWrapper
