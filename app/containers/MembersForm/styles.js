//-----------  Imports  -----------//

import styled    from 'styled-components'

import { Table } from 'antd'

import vars      from 'styles/variables'

//-----------  Members Form  ----------- */

const Elem = styled.div``

const List = styled(Table)`
  margin-top : 1em;
`

const Column = styled(Table.Column)``

//-----------  Exports  ----------- */

export default { Elem, List, Column }
