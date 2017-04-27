//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'
import mixins from 'styles/mixins'
import media  from 'styles/media'

//-----------  Helpers  ----------- */

const modalWidth = ({ size, open }) => {
  if (!open) return vars.smallWidth

  switch(size){
    case 'full' : return vars.maxWidth
    case 'lg'   : return vars.blockWidth
    case 'rg'   : return vars.compactWidth
    default     : return vars.smallWidth
  }
}

//-----------  Modal Wrapper  ----------- */

const Elem = styled.div`
  -webkit-overflow-scrolling : touch;
  height                     : 100vh;
  left                       : 0;
  overflow-y                 : scroll;
  pointer-events             : ${props => props.open ? 'auto' : 'none'};
  position                   : fixed;
  top                        : 0;
  width                      : 100vw;
  z-index                    : 1000;
`

const Popup = styled.div`
  backface-visibility : hidden;
  height              : auto;
  left                : 50%;
  max-width           : ${props => modalWidth(props)};
  min-width           : 20em;
  opacity             : ${props => props.open ? '1' : '0'};
  padding             : 1em;
  position            : absolute;
  top                 : 5%;
  transform           : ${props => props.open ? 'scale(1) translateX(-50%)' : 'translateX(-50%)'};
  transition          : all 0.15s ease-in-out, width 0;
  transition-delay    : ${props => props.open ? '0s' : '0.15s'};
  visibility          : ${props => props.open ? 'visible' : 'hidden'};
  width               : 100%;
  z-index             : 2000;

  ${media.small`
    top: 0;
  `}
`

const Content = styled.div`
  ${ mixins.fullBgImg() }

  background-color : ${vars.white};
  border-radius    : 0.33em;
  box-shadow       : 0.33em 0.33em 2em rgba(0, 0, 0, 0.33);
  color            : ${vars.grayDark};
  margin           : 0 auto;
  min-height       : 10em;
  opacity          : ${props => props.open ? '1' : '0'};
  padding          : 2em 2.25em 2.25em;
  position         : relative;
  transform        : ${props => props.open ? 'scale(1)' : 'scale(0.7)'};
  transform-origin : 50% 0;
  transition       : 0.15s ease-in-out;
`

const Close = styled.a`
  color      : ${vars.grayDark};
  font-style : normal;
  position   : absolute;
  right      : 0.75em;
  top        : 0.75em;
  z-index    : 100;
  padding: 0.25em;

  i {
    font-size: 1.25em;
  }

  &:hover {
    color: ${vars.redLight} !important;
  }
`

//-----------  Exports  ----------- */

export default { Elem, Popup, Content, Close }
