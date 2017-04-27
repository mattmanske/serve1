//-----------  Imports  -----------//

import styled  from 'styled-components'

import vars    from 'styles/variables'
import mixins  from 'styles/mixins'
import helpers from 'styles/helpers'

//-----------  Form Error  ----------- */

const Elem = styled.div`
  ${ mixins.antiAliased(false) }
  
  backface-visibility : hidden;
  background          : ${vars.redLight};
  border-radius       : ${vars.radius};
  box-shadow          : ${vars.shadow};
  color               : ${vars.white};
  font-size           : 0.8em;
  opacity             : ${props => props.error ? '1' : '0'};
  padding             : 1em ${vars.gutter};
  pointer-events      : ${props => props.error ? 'auto' : 'none'};
  position            : absolute;
  right               : 0;
  text-align          : left;
  top                 : calc(100% + 0.5em);
  transition          : all 0.1s ease-in-out;
  visibility          : ${props => props.error ? 'visible' : 'hidden'};

  &::after, &::before {
    border              : solid transparent;
    border-color        : transparent;
    border-width        : 0 0.5em 0.5em 0.5em;
    border-bottom-color : ${vars.redLight};
    content             : "";
    height              : 0;
    pointer-events      : none;
    position            : absolute;
    right               : 0.5em;
    top                 : -0.5em;
    width               : 0; : 0;
  }
`

//-----------  Exports  ----------- */

export default { Elem }
