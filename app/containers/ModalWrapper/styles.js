//-----------  Imports  -----------//

import styled    from 'styled-components'

import { Modal } from 'antd'

import vars      from 'styles/variables'

//-----------  Cases Route  ----------- */

const Wrapper = styled(Modal)`
  width: 27rem !important;

  .ant-modal-body {
    padding: ${vars.gutterLg};
  }
`

//-----------  Exports  ----------- */

export default { Wrapper }
