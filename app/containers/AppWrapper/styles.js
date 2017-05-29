//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'
import mixins from 'styles/mixins'

//-----------  Definitions  -----------//

let Styles = {}

//-----------  Bounds Wrapping  -----------//

Styles.Wrapper = styled.div`
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

Styles.Page = styled.div`
  display : flex;
  height  : 100vh;
  width   : 100vw;
  flex-direction: column;

  > header {
    flex: 0 0 auto;
  }
`

Styles.App = styled.div`
  flex     : 1 0 auto;
  position : relative;
`

Styles.Login = styled.div`
  ${ mixins.centerAlign() }

  max-width  : ${vars.compactWidth};
  text-align : center;
`

Styles.Sheet = styled.div`
  background    : ${vars.white};
  border-radius : ${vars.radius} ${vars.radius} 0 0;
  bottom        : 0;
  box-shadow    : 0.25em 1.25em 5em rgba(0, 0, 0, 0.15);
  display       : flex;
  left          : 0;
  margin        : auto;
  margin-top    : ${p => p.show ? '0em' : '3em'};
  max-width     : ${vars.maxWidth};
  opacity       : ${p => p.show ? 1 : 0.5};
  overflow      : hidden;
  position      : absolute;
  right         : 0;
  top           : 0;
  transition    : all 1.25s ease-out 0.25s;
  filter        : ${p => p.show ? 'blur(0)' : 'blur(2px)'};

  > div {
    color    : ${vars.black};
    flex     : 1 0 auto;
    overflow : scroll;
  }
`

//-----------  Exports  ----------- */

export default Styles
