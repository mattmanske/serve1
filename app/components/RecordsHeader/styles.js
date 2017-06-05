//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'
import mixins from 'styles/mixins'

//-----------  Table Header  ----------- */

const Header = styled.div`
  display: flex;
`

const Info = styled.div`
  flex    : 1 1 auto;
  opacity : 0.9;

  > * {
    display      : inline-block;
    margin-right : 1.5rem;
  }
`

const Title = styled.h1`
  ${ mixins.antiAliased() }

  color: ${vars.grayDarkest};
`

const Count = styled.h5`
  ${ mixins.antiAliased() }

  color: ${vars.grayLight};
`

const Subtitle = styled.h5`
  ${ mixins.antiAliased() }

  color       : ${vars.gray};
  display     : block;
  line-height : 1;
`

const Actions = styled.div`
  display    : flex;
  flex       : 0 1 auto;
  text-align : right;

  > * {
    margin-left: 0.5rem;
  }

  .ant-input-affix-wrapper .ant-input-prefix,
  .ant-input-affix-wrapper .ant-input-suffix {
    top: 0.85rem;
  }
`

//-----------  Exports  ----------- */

export default { Header, Info, Title, Count, Subtitle, Actions }
