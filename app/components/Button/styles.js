//-----------  Imports  -----------//

import styled  from 'styled-components'

import vars    from 'styles/variables'
import mixins  from 'styles/mixins'
import helpers from 'styles/helpers'

//-----------  Helpers  ----------- */

const isDisabled = ({ disabled, loading }) => {
  return (disabled || loading)
}

const isGlyph = ({ icon, children }) => {
  return (icon && !children)
}

const fontSize = ({ size }) => {
  switch(size){
    case 'lg' : return '1.15em'
    case 'sm' : return '0.75em'
    default   : return '0.9em'
  }
}

const fontColor = ({ color, outline }) => {
  if (!outline && 'white' != color) return vars.white

  switch(color){
    case 'blue'      : return vars.blueLight
    case 'red'       : return vars.red
    case 'dark-blue' : return vars.blue
    case 'gray'      : return vars.gray
    case 'white'     : return vars.grayDark
    default          : return color
  }
}

const fontHoverColor = ({ color, outline }) => {
  if (!outline && 'white' != color) return vars.white

  switch(color){
    case 'blue'      : return vars.blueLighter
    case 'red'       : return vars.redLight
    case 'dark-blue' : return vars.blueLight
    case 'gray'      : return vars.grayLight
    case 'white'     : return vars.blue
    default          : return helpers.lighten(color, 10)
  }
}

const borderColor = ({ color, outline }) => {
  if (!outline) return 'transparent'

  switch(color){
    case 'blue'      : return vars.blueLight
    case 'red'       : return vars.red
    case 'dark-blue' : return vars.blue
    case 'gray'      : return vars.gray
    default          : return color
  }
}

const borderHoverColor = ({ color, outline }) => {
  if (!outline) return 'transparent'

  switch(color){
    case 'blue'      : return vars.blueLighter
    case 'red'       : return vars.redLight
    case 'dark-blue' : return vars.blueLight
    case 'gray'      : return vars.grayLight
    default          : return helpers.lighten(color, 10)
  }
}

const backgroundColor = ({ color, outline }) => {
  if (outline) return helpers.toRgb(vars.white, 0.5)

  switch(color){
    case 'blue'      : return vars.blueLight
    case 'red'       : return vars.red
    case 'dark-blue' : return vars.blue
    case 'gray'      : return vars.gray
    default          : return color
  }
}

const backgroundHoverColor = ({ color, outline }) => {
  if (outline) return helpers.toRgb(vars.white, 0.5)

  switch(color){
    case 'blue'      : return vars.blueLighter
    case 'red'       : return vars.redLight
    case 'dark-blue' : return vars.blueLight
    case 'gray'      : return vars.grayLight
    default          : return helpers.lighten(color, 10)
  }
}

//-----------  Button  ----------- */

const Elem = styled.button`
  appearance     : none;
  background     : ${props => backgroundColor(props)};
  border         : 2px solid transparent;
  border-color   : ${props => borderColor(props)};
  border-radius  : ${vars.radius};
  color          : ${props => fontColor(props)};
  cursor         : ${props => isDisabled(props) ? 'not-allowed' : 'pointer'};
  display        : inline-block;
  font-size      : ${props => fontSize(props)};
  opacity        : ${props => isDisabled(props) ? '0.75' : '1'};
  outline        : none;
  padding        : ${props => isGlyph(props) ? '1.33em 2em' : '0.6em 2em'};
  pointer-events : ${props => isDisabled(props) ? 'none' : 'auto'};
  position       : relative;
  text-align     : center;
  transition     : ${vars.transition};
  white-space    : nowrap;

  i, img {
    font-size  : 1.25em !important;
    transition : ${vars.transition};

    & + span {
      padding-left: 0.5em;
    }
  }

  i, span {
    opacity        : ${props => props.loading ? '0.33' : '1'};
    vertical-align : middle;
  }

  &:hover {
    background   : ${props => backgroundHoverColor(props)};
    border-color : ${props => borderHoverColor(props)};

    i, span {
      color: ${props => fontHoverColor(props)};
    }
  }

  svg {
    ${ mixins.centerAlign() }

    fill           : ${vars.white};
    height         : 3rem;
    opacity        : ${props => props.loading ? '1' : '0'};
    pointer-events : none;
    transition     : 0.5s;
  }
`

const Link = styled.a`
  appearance     : none;
  background     : ${props => backgroundColor(props)};
  border         : 2px solid transparent;
  border-color   : ${props => borderColor(props)};
  border-radius  : ${vars.radius};
  color          : ${props => fontColor(props)};
  cursor         : ${props => isDisabled(props) ? 'not-allowed' : 'pointer'};
  display        : inline-block;
  font-size      : ${props => fontSize(props)};
  opacity        : ${props => isDisabled(props) ? '0.75' : '1'};
  outline        : none;
  padding        : ${props => isGlyph(props) ? '1.33em 2em' : '0.6em 2em'};
  pointer-events : ${props => isDisabled(props) ? 'none' : 'auto'};
  position       : relative;
  text-align     : center;
  transition     : ${vars.transition};
  white-space    : nowrap;

  i, img {
    font-size  : 1.25em !important;
    transition : ${vars.transition};

    & + span {
      padding-left: 0.5em;
    }
  }

  i, span {
    opacity        : ${props => props.loading ? '0.33' : '1'};
    vertical-align : middle;
  }

  &:hover {
    background   : ${props => backgroundHoverColor(props)};
    border-color : ${props => borderHoverColor(props)};

    i, span {
      color: ${props => fontHoverColor(props)};
    }
  }

  svg {
    ${ mixins.centerAlign() }

    fill           : ${vars.white};
    height         : 3rem;
    opacity        : ${props => props.loading ? '1' : '0'};
    pointer-events : none;
    transition     : 0.5s;
  }
`

const Inner = styled.span`
  ${ mixins.antiAliased(false) }

  font-family    : ${vars.bodyFont};
  text-transform : uppercase;
  transition     : ${vars.transition};

  small, i {
    ${ mixins.antiAliased() }

    color          : ${props => fontColor(props)};
    vertical-align : 0.1em;
  }
`

//-----------  Exports  ----------- */

export default { Elem, Link, Inner }
