//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Model Form  ----------- */

const Wrapper = styled.form`
  background : ${vars.white};
  display    : block;
  margin     : 0 auto;
  max-width  : ${vars.smallWidth};
  position   : relative;
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

const Field = styled.div`
  ${p => p.float && `
    float: right;
  `}
`

const Submit = styled.div`
  button + button {
    margin-left: ${vars.gutterSm};
  }
`

//-----------  Exports  ----------- */

export default { Wrapper, Title, Small, Field, Submit }
