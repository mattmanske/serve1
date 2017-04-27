//-----------  Imports  -----------//

import 'react-datepicker/dist/react-datepicker.css'

import styled  from 'styled-components'

import vars    from 'styles/variables'
import mixins  from 'styles/mixins'
import helpers from 'styles/helpers'

//-----------  Redux Field  ----------- */

const Elem = styled.div`
  margin     : 0;
  position   : relative;
  transition : ${vars.transition};

  input,
  select,
  textarea {
    background   : ${vars.white};
    border-color : ${props => props.isInvalid ? vars.red : ''};
    color        : ${props => props.isInvalid ? vars.red : ''};

    &::placeholder {
      color: ${props => props.isInvalid ? vars.red : 'inherit'} !important;
    }

    &:hover, &:focus {
      border-color: ${props => props.isInvalid ? vars.red : ''};
    }
  }

  svg {
    ${ mixins.verticalAlign() }

    fill        : ${vars.gray};
    margin-left : 1em;
    width       : 2rem;
  }

  .react-numeric-input {
    margin: 0;

    b {
      display: none;
    }
  }

  .react-datepicker__input-container {
    display: block;
  }
`

const Label = styled.label`
  color: ${props => props.isInvalid ? vars.red : 'inherit'} !important;

  sup {
    color       : ${vars.red};
    font-family : monospace;
    font-weight : bold;
  }

  ${props => props.isInvalid && `
    small {
      color: ${vars.redLight};
    }
  `}
`

const Interior = styled.div`
  position: relative;

  span {
    color       : ${vars.grayDark};
    font-weight : normal;
    margin      : 0 !important;
    position    : absolute;
  }

  > i {
    ${ mixins.verticalAlign() }

    color   : ${props => props.disabled ? vars.gray : helpers.lighten(vars.blueLight, 10)};
    z-index : 1;

    & + input,
    & + select,
    & + div > input {
      padding-left: 2.67em;
    }

    &:first-child {
      left: 0.4em;
    }
  }

  .select-icon {
    bottom         : -1rem;
    color          : ${vars.grayDark};
    font-size      : 2.25em;
    pointer-events : none;
    right          : 0.4rem;
    transition     : ${vars.transition};
  }

  &:hover .select-icon,
  &:focus .select-icon {
    color: ${vars.black};
  }
`

const Prefix = styled.span`
  bottom    : 0.75em;
  font-size : 1em;
  left      : 0.67em;
`

const Suffix = styled.span`
  bottom    : 0.45em;
  font-size : 1.25em;
  right     : 0.6em;
`

const Errors = styled.div`
  ${ mixins.antiAliased() }

  background     : ${vars.red};
  border-radius  : ${vars.radius};
  box-shadow     : 0 1px 2px rgba(0, 0, 0, 0.15);
  color          : ${vars.white};
  display        : table;
  font-size      : 0.8rem;
  font-weight    : bold;
  left           : ${p => (p.isFocused && p.isInvalid) ? 'calc(100% + 0.2em)' : 'calc(100% - 0.2em)'};
  letter-spacing : 0.01em;
  line-height    : 1.33;
  max-width      : 15em;
  opacity        : ${p => (p.isFocused && p.isInvalid) ? 1 : 0};
  padding        : 0.55em 0.67em 0.55em 0.75em;
  pointer-events : none;
  position       : absolute;
  top            : 0.5em;
  transition     : ${vars.transition};
  z-index        : 10;

  &::after {
    border             : solid transparent;
    border-color       : transparent;
    border-right-color : ${vars.red};
    border-width       : 0.4em 0.6em 0.4em 0;
    content            : "";
    height             : 0;
    pointer-events     : none;
    position           : absolute;
    right              : 100%;
    top                : 0.75em;
    width              : 0;
  }
`

const Notes = styled.small`
  font-style: italic;
`

//-----------  Exports  ----------- */

export default { Elem, Label, Interior, Prefix, Suffix, Errors, Notes }
