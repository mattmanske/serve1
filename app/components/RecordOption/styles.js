//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Record Select  ----------- */

const Option = styled.span`
  color: ${vars.grayDarkest};
`

const Id = styled.span`
  color          : ${vars.grayDark};
  margin-right   : 0.75em;
  vertical-align : baseline;
`

//-----------  Exports  ----------- */

export default { Option, Id }
