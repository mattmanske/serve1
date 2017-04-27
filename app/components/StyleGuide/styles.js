//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Style Guide  ----------- */

const Elem = styled.div`
`

const Colors = styled.div`
  align-items     : center;
  display         : flex;
  justify-content : flex-start;
  margin-top      : 1em;

  > h5 {
    display        : inline-block;
    flex           : 0 1 auto;
    margin-right   : 1em;
    text-align     : right;
    text-transform : uppercase;
  }

  > div {
    display      : inline-block;
    flex         : 0 0 2em;
    height       : 2em;
    margin-right : 0.33em;
  }
`

//-----------  Exports  ----------- */

export default { Elem, Colors }
