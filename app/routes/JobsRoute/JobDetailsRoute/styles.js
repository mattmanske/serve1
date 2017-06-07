//-----------  Imports  -----------//

import styled     from 'styled-components'

import { Row,
         Col,
         Card,
         Button } from 'antd'

import vars       from 'styles/variables'

//-----------  Registration Route  ----------- */

const Body = styled.div`
  background      : white;
  border-radius   : 5px;
  display         : flex;
  justify-content : space-between;
  margin          : ${vars.gutterLg} 0 ${vars.gutterSm};
  padding         : 1rem 0;
  box-shadow      : 1px 1px 3px rgba(0,0,0,0.067);
`

const Section = styled.div`
  border-left  : 1px solid ${vars.grayLightest};
  flex         : 0 0 33.3%;
  padding      : 0.5rem 1.5rem;
  position     : relative;

  &:first-child {
    border-left: none;
  }
`

const Title = styled.h6`
  border-bottom  : 1px solid ${vars.grayLightest};
  color          : ${vars.grayDarker};
  letter-spacing : 0.05rem;
  margin         : -5px -10px 1.15rem -5px;
  padding        : 5px 10px 2px 5px;
  text-transform : uppercase;
`

const Wrapper = styled.div`
  opacity: 0.8;
`

const Action = styled(Button).attrs({
  icon : 'edit',
  size : 'small',
  type : 'dashed',
})`
  font-size : 0.6rem !important;
  position  : absolute;
  right     : 0.85rem;
  top       : -0.25rem;
`

const Empty = styled(Button).attrs({
  icon : 'paper-clip',
  type : 'dashed',
})`
  margin-top: ${vars.gutterSm};
`

//-----------  Exports  ----------- */

export default { Body, Section, Title, Wrapper, Action, Empty }
