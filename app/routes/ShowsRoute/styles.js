//-----------  Imports  -----------//

import styled      from 'styled-components'

import PageWrapper from 'components/PageWrapper'

import vars        from 'styles/variables'
import mixins      from 'styles/mixins'

//-----------  Shows Route  ----------- */

const Page = styled(PageWrapper)`

  table {
    border-color : ${vars.grayLightest} !important;
    border-right : 1px solid ${vars.grayLightest};
    table-layout : fixed;
  }

  th, td {
    ${ mixins.ellipsis() }

    border-color : ${vars.grayLightest} !important;
    border-left  : 1px solid ${vars.grayLightest};
    text-align   : center !important;
  }

  .venue-col {
    text-align: left !important;

    strong {
      ${ mixins.ellipsis() }

      display: block;
    }
  }

  .member-col {
    position: relative;
  }

  .booked-col + .member-col::before {
    background     : linear-gradient(left, rgba(0,0,0,0.033), rgba(0,0,0,0));
    bottom         : 0;
    content        : '';
    left           : 0;
    pointer-events : none;
    position       : absolute;
    top            : 0;
    width          : 1em;
  }

  .ant-table-footer {
    border-radius : 0 0 4px 4px;
    overflow      : hidden;
    padding       : 0;
  }
`

const Header = styled.header`
  align-items     : center;
  display         : flex;
  justify-content : space-between;
  margin-bottom   : ${vars.gutter};

  > *:first-child {
    display : inline-block;
    flex    : 0 1 auto;
  }
`

//-----------  Exports  ----------- */

export default { Page, Header }
