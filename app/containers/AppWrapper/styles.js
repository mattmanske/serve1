//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'
import mixins from 'styles/mixins'

//-----------  Bounds Wrapping  -----------//

const Elem = styled.div`
  align-items    : stretch;
  background     : white;
  color          : black;
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

const Logo = styled.div`
  background    : ${vars.red};
  border-radius : 0 0 ${vars.radius} ${vars.radius};
  box-shadow    : ${vars.shadow};
  margin        : -1.5em ${vars.gutterSm} -${vars.gutterLg};
  padding       : ${vars.gutter};
`

//-----------  Exports  ----------- */

export default { Elem, Logo }
