//-----------  Imports  -----------//

import styled  from 'styled-components'

import vars    from 'styles/variables'
import mixins  from 'styles/mixins'
import helpers from 'styles/helpers'

//-----------  Popup Tooltip  ----------- */

const Elem = styled.div`
  cursor   : pointer;
  height   : 100%;
  left     : 0;
  position : absolute;
  top      : 0;
  width    : 100%;
`

const Popup = styled.div`
  ${ mixins.horizontalAlign() }

  backface-visibility : hidden;
  background          : ${vars.white};
  border              : ${vars.border};
  border-radius       : ${vars.radius};
  box-shadow          : ${vars.shadow};
  margin-left         : calc(100% - 1em);
  opacity             : ${props => props.active ? '1' : '0'};
  padding             : 1em ${vars.gutter};
  pointer-events      : ${props => props.active ? 'auto' : 'none'};
  text-align          : left;
  top                 : calc(100% + 0.5em);
  transform           : ${props => props.active ? 'scale(1) translateX(-50%)' : 'scale(0.7) translateX(-50%)'};
  transform-origin    : 0 0;
  transition          : all 0.1s ease-in-out;
  visibility          : ${props => props.active ? 'visible' : 'hidden'};

  &::after, &::before {
    border         : solid transparent;
    border-color   : transparent;
    border-width   : 0 0.5em 0.5em 0.5em;
    content        : "";
    height         : 0;
    left           : 0.5em;
    pointer-events : none;
    position       : absolute;
    position       : absolute;
    top            : -0.5em;
    width          : 0;
  }

  &::before {
    margin-top: -1px;
    border-bottom-color : ${helpers.toRgb(vars.grayLight, 0.75)};
  }

  &::after {
    border-bottom-color : ${vars.white};
  }
`

//-----------  Exports  ----------- */

export default { Elem, Popup }
