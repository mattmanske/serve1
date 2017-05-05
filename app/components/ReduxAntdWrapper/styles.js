//-----------  Imports  -----------//

import styled            from 'styled-components'

import { Form, Tooltip } from 'antd'

import vars              from 'styles/variables'

//-----------  Redux Field  ----------- */

const Wrapper = styled(Form.Item)`
  margin-bottom: ${vars.gutter} !important;

  .ant-input-number,
  .ant-calendar-picker {
    width: 100% !important;
  }
`

const Errors = styled(Tooltip)`

`

//-----------  Exports  ----------- */

export default { Wrapper, Errors }
