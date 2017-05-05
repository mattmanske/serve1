//-----------  Imports  -----------//

import styled   from 'styled-components'

import { Form } from 'antd'

import vars     from 'styles/variables'

//-----------  Show Form  ----------- */

const Wrapper = styled(Form)``

const Line = styled.hr`
  margin: 1.5em 0 1.33em;
  border: none;
  border-top: 1px dotted ${vars.grayLighter};
`

const SideBySide = styled.div`
  position: relative;

  > *:first-child > *:last-child {
    padding-right: 4em;
  }

  > *:last-child {
    display        : flex;
    flex-direction : column;
    position       : absolute;
    right          : 0;
    top            : 0;
    width          : 2.67em;

    > *:first-child {
      height   : 1.25em;
      overflow : visible;
      margin-top: -0.8em;
      padding-left: 0.33em;
      label {
        font-size: 0.8em;

        &::after {
          display: none;
        }
      }
    }
  }
`

//-----------  Exports  ----------- */

export default { Wrapper, Line, SideBySide }
