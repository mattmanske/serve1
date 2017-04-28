//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Money  ----------- */

const Wrapper = styled.span`
  font-size: 1.1em;
`

const Sign = styled.sup`
  font-size    : 0.615em;
  margin-right : 0.1em;
  opacity      : 0.67;
  top          : -0.4em;
`

const Cents = styled.sup`
  font-size : 0.615em;
  opacity   : 0.67;
  top       : -0.4em;
`

//-----------  Exports  ----------- */

export default { Wrapper, Sign, Cents }
