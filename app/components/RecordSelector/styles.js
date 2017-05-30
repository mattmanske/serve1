//-----------  Imports  -----------//

import styled     from 'styled-components'

// import Select  from 'react-select'
import { Select } from 'antd'

import vars       from 'styles/variables'
import mixins     from 'styles/mixins'

//-----------  Select Record  ----------- */

const Selector = styled(Select)`
  ${'' /* .Select-value-label {
    ${ mixins.ellipsis() }

    display       : block;
    padding-right : 2.25rem;
  } */}
`

//-----------  Exports  ----------- */

export default { Selector }
