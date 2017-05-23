//-----------  Imports  -----------//

import React, { PropTypes } from 'react'

import vars                 from 'styles/variables'

//-----------  Component  -----------//

const SvgLogo = ({ fill, width }) => {

  // const height = (width * 0.5368479136)
  //
  // const attrs = {
  //   version : 1.1,
  //   width   : `${width}px`,
  //   height  : `${height}px`,
  //   viewBox : '0 0 224.721 120.641',
  //   xmlns   : 'http://www.w3.org/2000/svg',
  // }

  return (
    <h1 style={{ color: fill }}>Serve1</h1>
  )
}

//-----------  Prop Types  -----------//

SvgLogo.propTypes = {
  fill  : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width : PropTypes.number
}

SvgLogo.defaultProps = {
  fill  : vars.white,
  width : 250
}

//-----------  Export  -----------//

export default SvgLogo
