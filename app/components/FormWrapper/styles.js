//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Model Form  ----------- */

const Wrapper = styled.form`
  margin    : 0 auto;
  max-width : ${vars.smallWidth};
`

const Title = styled.h2`
  margin-bottom : 1rem;
  text-align    : ${p => p.horizontal ? 'left' : 'center'};
`

const Small = styled.small`
  color      : ${vars.gray};
  display    : block;
  font-style : italic;
  margin     : ${vars.gutter} 0;
  text-align : center;
`

const Submit = styled.div`
  button + button {
    margin-left: ${vars.gutterSm};
  }
`

//-----------  Exports  ----------- */

export default { Wrapper, Title, Small, Submit }