//-----------  Imports  -----------//

import vars   from 'styles/variables'
import mixins from 'styles/mixins'

//-----------  Exports  -----------//

export default `
  form {
    width: 100%;
  }

  fieldset {
    border  : 0;
    margin  : 0;
    padding : 0.33em 0 1em;
  }

  legend {
    ${ mixins.antiAliased() }

    color          : ${vars.grayDarker};
    font-size      : 0.9em;
    text-transform : uppercase;
  }

  button,
  input[type='submit'],
  input[type='button'] {
    appearance: none;

    &:disabled {
      cursor  : not-allowed;
      opacity : 0.75;
    }
  }

  label {
    ${ mixins.antiAliased() }

    color          : ${vars.grayDarker};
    display        : block;
    font-size      : 0.9em;
    margin         : 1.25em 0 0.33em;
    text-align     : left;
    text-transform : uppercase;

    small {
      color          : ${vars.grayDark};
      margin-left    : 0.33rem;
      text-transform : lowercase;
    }
  }

  label + input,
  label + textarea,
  label + .select-wrapper {
    margin-top: 0 !important;
  }
`
