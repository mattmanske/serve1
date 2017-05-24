//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Avatar  ----------- */

const Avatar = styled.span`
  background          : ${vars.white};
  background-image    : ${p => `url(${p.url})`};
  background-position : center center;
  background-size     : cover;
  border-radius       : 50%;
  box-shadow          : ${vars.shadow};
  display             : inline-block;
  height              : ${p => p.size};
  vertical-align      : middle;
  width               : ${p => p.size};
`

//-----------  Exports  ----------- */

export default { Avatar }
