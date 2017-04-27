//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Helpers  ----------- */

const maxWidth = (props) => {
  switch(props.type){
    case 'block'   : return vars.blockWidth
    case 'compact' : return vars.compactWidth
    case 'small'   : return vars.smallWidth
    default        : return vars.maxWidth
  }
}

//-----------  Bounds Wrapping  -----------//

const Elem = styled.div`
  margin-left  : auto;
  margin-right : auto;
  max-width    : ${props => maxWidth(props)};
  padding      : ${vars.gutterLg};
  position     : relative;
`

//-----------  Exports  ----------- */

export default { Elem }
