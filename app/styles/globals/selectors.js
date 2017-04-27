//-----------  Imports  -----------//

import vars    from 'styles/variables'
import helpers from 'styles/helpers'

//-----------  Exports  -----------//

export default `
  .selector-wrapper {
    @include mobile-down {
      display     : block;
      margin-left : 0 !important;
    }
  }

  input[type='radio'],
  input[type='checkbox'] {
    display: none;
  }

  input[type='radio'] + label,
  input[type='checkbox'] + label {
    color          : ${vars.grayDarker};
    cursor         : pointer;
    display        : inline-block;
    font-size      : 0.9em;
    line-height    : 1.5;
    margin-top     : 0.25em;
    padding-bottom : 0.15em;
    padding-left   : 1.67em;
    position       : relative;
    text-align     : left;
    transition     : ${vars.transition};
    user-select    : none;

    &::before {
      background-color : ${vars.white};
      border           : 1px solid ${vars.grayDarker};
      border-radius    : ${vars.radius};
      content          : "";
      height           : 13px;
      left             : 0;
      position         : absolute;
      transition       : ${vars.transition};
      width            : 13px;
    }

    &:first-of-type {
      margin-top: 0;
    }
  }

  input[type='radio'] + label:hover,
  input[type='radio']:focus + label,
  input[type='checkbox'] + label:hover,
  input[type='checkbox']:focus + label {
    color: ${vars.blueDark};

    &::before {
      border-color: ${vars.blueDark};
    }
  }

  input[type='radio']:checked + label,
  input[type='checkbox']:checked + label {
    color: $blueDark;

    &::before {
      background-color : ${vars.blueLight};
      border-color     : ${vars.white};
      box-shadow       : 0 0 0 1px rgba(${vars.blueLight}, 0.67);
    }
  }

  input[type='radio'].error + label,
  input[type='checkbox'].error + label {
    color: ${vars.blueLight};

    &::before {
      background-color : ${helpers.lighten(vars.blue, 42)};
      border-color     : ${vars.blueLight};
    }
  }

  input[type='radio'].error + label {
    &::before {
      box-shadow: inset 0 0 0 3px ${helpers.lighten(vars.blue, 42)};
    }
  }

  input[type='checkbox'].error + label {
    &::after {
      color: ${helpers.lighten(vars.blue, 42)};
    }
  }

  input[type='radio'].error + label:hover,
  input[type='radio'].error:focus + label,
  input[type='checkbox'].error + label:hover,
  input[type='checkbox'].error:focus + label {
    color: ${vars.blue};

    &::before {
      border-color: ${vars.blue};
    }
  }

  input[type='radio'].error:checked + label,
  input[type='checkbox'].error:checked + label {
    color: ${vars.blue};

    &::before {
      background-color : ${vars.blue};
      border-color     : ${vars.blue};
    }
  }

  input[type='radio'] + label {
    &::before {
      border-radius : 10em;
      box-shadow    : inset 0 0 0 3px ${vars.white};
      top           : 1px;
    }
  }

  input[type='checkbox'] + label {
    &::before {
      top: 2px;
    }

    &::after {
      color          : ${vars.white};
      content        : "";
      font-size      : 0.67rem;
      left           : 1px;
      position       : absolute;
      text-transform : none;
      top            : 0;
    }
  }
`
