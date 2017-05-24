//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'
import mixins from 'styles/mixins'

//-----------  Bounds Wrapping  -----------//

const Wrapper = styled.div`
  align-items    : stretch;
  background     : linear-gradient(45deg, ${vars.purple}, ${vars.blueLight})
  color          : ${vars.white};
  display        : flex;
  flex-direction : column;
  font-size      : $emBase;
  font-style     : normal;
  min-height     : 100vh;
  position       : relative;
  z-index        : 1;

  > header {
    flex: 0 0 auto;

    & + * {
      flex: 1 0 auto;
    }
  }
`

const App = styled.div``

const Login = styled.div`
  ${ mixins.centerAlign() }

  max-width  : ${vars.compactWidth};
  text-align : center;
`

//-----------  Exports  ----------- */

export default { Wrapper, App, Login }
