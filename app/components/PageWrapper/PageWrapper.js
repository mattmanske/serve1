//-----------  Imports  -----------//

import Block                from './styles'

import React, { PropTypes } from 'react'
import Helmet               from 'react-helmet'

//-----------  Component  -----------//

const PageWrapper = ({ fill, title, loading, description, children, ...props }) => {

  return (
    <Block.Elem fill={fill} loading={loading} { ...props }>
      <Helmet title={title} meta={[{ name: 'description', content: description }]} />
      {children}
    </Block.Elem>
  )
}

//-----------  Prop Types  -----------//

PageWrapper.propTypes = {
  fill        : PropTypes.bool,
  title       : PropTypes.string,
  loading     : PropTypes.bool,
  description : PropTypes.string,
  children    : PropTypes.node.isRequired
}

PageWrapper.defaultProps = {
  fill    : false,
  loading : false
}

//-----------  Export  -----------//

export default PageWrapper
