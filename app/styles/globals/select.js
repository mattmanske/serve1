//-----------  Imports  -----------//

import vars from 'styles/variables'

//-----------  Exports  -----------//

export default `
  select {
    -webkit-appearance : none;
    background-color   : ${vars.white};
    border-radius      : ${vars.radius};
    cursor             : pointer;
    margin-bottom      : 0;
    margin-top         : 0;
    padding            : 0.67em 0.75em;
  }

  &::before {
    background-image : linear-gradient(to left, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0));
    bottom           : 2px;
    content          : '';
    height           : 2.33em;
    pointer-events   : none;
    position         : absolute;
    right            : 2px;
    width            : 2.33em;
  }

  &::after {
    bottom         : 0;
    color          : $grayDark;
    line-height    : 2rem;
    pointer-events : none;
    position       : absolute;
    right          : 0.67rem;
    transition     : $transition;
  }

  &:hover::after {
    color: ${vars.blueDark};
  }

  &:disabled {
    color  : ${vars.grayDark};
    cursor : not-allowed;

    &::after {
      color: $${vars.gray};
    }
  }

  label {
    position: relative;
  }
`
